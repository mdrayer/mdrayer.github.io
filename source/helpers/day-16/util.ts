const BIT_DATA = `0 = 0000
1 = 0001
2 = 0010
3 = 0011
4 = 0100
5 = 0101
6 = 0110
7 = 0111
8 = 1000
9 = 1001
A = 1010
B = 1011
C = 1100
D = 1101
E = 1110
F = 1111`
  .split(/\n/)
  .map(a => a.split(' = '))
  .reduce<Record<string, string>>((prev, curr) => {
    return {
      ...prev,
      [curr[0]]: curr[1],
    };
  }, {});

function getBit(val: number | string): string {
  const bit = Object.entries(BIT_DATA).find(
    ([, value]) => Number(val) === Number(value),
  );
  if (!bit) {
    throw new Error(`Bit not found for ${val}.`);
  }
  return bit[0];
}

type Packet = {
  version: number;
  typeId: string;
  result?: number;
  subpackets: Packet[];
  bit: string;
  remainder?: string;
  type: 'Literal' | 'Operator';
};

function getPacket(hexStr: string) {
  // Every packet begins with a standard header:
  // - the first three bits encode the packet version,
  // - and the next three bits encode the packet type ID.
  // These two values are numbers; all numbers encoded in any packet are represented as binary
  // with the most significant bit first.
  // For example, a version encoded as the binary sequence 100 represents the number 4.

  // Decode the hexadecimal string to get the packet.
  const bits = hexStr
    .split('')
    .map(a => BIT_DATA[a])
    .join('');
  return { hexidecimal: hexStr, fullbit: bits, ...parsePacket(bits) };
}

function parsePacket(bits: string): Packet {
  // Get the packet version and packet type ID.
  const version = parseInt(bits.substring(0, 3), 2);
  const typeId = getBit(Number(bits.substring(3, 6)));
  let result: number | undefined;
  let remainder: string | undefined;
  const subpackets: Packet[] = [];
  const subpacketStrArr: string[] = [];

  const isLiteralValue = typeId === '4';
  const subpacketStr = bits.substring(6);
  if (isLiteralValue) {
    const rest = parseLiteral(subpacketStr);
    result = rest.result;
    subpacketStrArr.push(...rest.subpackets);
    remainder = rest.remainder.length > 0 ? rest.remainder : undefined;

    const packetBit = bits.substring(0, 3 + 3) + subpacketStrArr.join('');

    return {
      version,
      typeId,
      result,
      bit: packetBit,
      remainder,
      subpackets,
      type: 'Literal',
    };
  } else {
    const rest = parseOperator(subpacketStr);
    subpackets.push(...rest.subpackets);

    const packetBit =
      bits.substring(0, 3 + 3) +
      rest.lengthTypeId +
      rest.next +
      subpackets.map(s => s.bit).join('');

    const rem = bits.substring(packetBit.length);
    remainder = rem.length > 0 ? rem : undefined;

    return {
      version,
      typeId,
      bit: packetBit,
      remainder,
      subpackets,
      type: 'Operator',
    };
  }
}

function parseLiteral(subpacketStr: string) {
  // Packets with type ID 4 represent a literal value. Literal value packets encode a single binary number.
  // To do this, the binary number is padded with leading zeroes until its length is a multiple of four bits,
  // and then it is broken into groups of four bits. Each group is prefixed by a 1 bit except the last group,
  // which is prefixed by a 0 bit. These groups of five bits immediately follow the packet header.
  // Get the rest of the binary in groups of 5.
  const rest = subpacketStr.match(/.{5}/g);

  if (!rest) {
    throw new Error('Something went wrong');
  }

  // The last group will be prefixed with a 0. Find the index of that one to stop.
  const lastGroupIndex = rest.findIndex(a => a[0] === '0');

  const subpackets = rest.slice(0, lastGroupIndex + 1);
  const remainder = subpacketStr.substring(subpackets.join('').length);

  const binary = subpackets.map(a => a.substring(1)).join('');
  const decimal = parseInt(binary, 2);

  return {
    result: decimal,
    subpackets,
    remainder,
  };
}

function parseOperator(subpacketStr: string) {
  // Every other type of packet (any packet with a type ID other than 4) represent an operator
  // that performs some calculation on one or more sub-packets contained within. Right now, the
  // specific operations aren't important; focus on parsing the hierarchy of sub-packets.
  // An operator packet contains one or more packets. To indicate which subsequent binary data
  // represents its sub-packets, an operator packet can use one of two modes indicated by the bit
  // immediately after the packet header; this is called the length type ID:
  // - If the length type ID is 0, then the next 15 bits are a number that represents the total
  //   length in bits of the sub-packets contained by this packet.
  // - If the length type ID is 1, then the next 11 bits are a number that represents the number
  //   of sub-packets immediately contained by this packet.
  const subpackets: Packet[] = [];
  const lengthTypeId = subpacketStr[0];
  const length = lengthTypeId === '0' ? 15 : 11;
  const next = subpacketStr.substring(1, 1 + length);
  const n = parseInt(next, 2);
  const subStr = subpacketStr.substring(1 + length);

  if (lengthTypeId === '0') {
    // The subpacket string will be of length n, so supply that to the parser.
    const packet = parsePacket(subStr.substring(0, n));
    subpackets.push(packet);

    // Keep track of our total subpacket bit size. Stop when we go over n.
    let totalBits = packet.bit;
    let rem = subStr.substring(totalBits.length);

    while (totalBits.length < n) {
      const subpacket = parsePacket(rem);
      subpackets.push(subpacket);
      // Add subpacket bit to our total.
      totalBits += subpacket.bit;
      rem = subStr.substring(totalBits.length);
    }
  } else {
    // There will be n sub-packets.
    const packet = parsePacket(subStr);
    subpackets.push(packet);

    // Initialize our counter.
    let count = 1;
    let totalBits = packet.bit;
    let rem = subStr.substring(totalBits.length);

    while (count < n) {
      const subpacket = parsePacket(rem);
      subpackets.push(subpacket);
      // Increment the count.
      count++;
      totalBits += subpacket.bit;
      rem = subStr.substring(totalBits.length);
    }
  }

  return {
    lengthTypeId,
    next,
    subpackets,
  };
}

// Part One testers
// const TEST_HEX = 'D2FE28';
// const TEST_HEX_2 = '38006F45291200';
// const TEST_HEX_3 = 'EE00D40C823060';

// const TESTS: Array<[string, number]> = [
//   ['8A004A801A8002F478', 16],
//   ['620080001611562C8802118E34', 12],
//   ['C0015000016115A2E0802F182340', 23],
//   ['A0016C880162017C3686B18A3D4780', 31],
// ];

function partOne(input: string) {
  const packet = getPacket(input);
  return getVersionTotal(packet);
}

function getVersionTotal(packet: Packet): number {
  let total = packet.version;

  packet.subpackets.forEach(s => {
    total += getVersionTotal(s);
  });

  return total;
}

// Part Two testers

// const TESTS_PT_2: Array<[string, number]> = [
//   ['C200B40A82', 3],
//   ['04005AC33890', 54],
//   ['880086C3E88112', 7],
//   ['CE00C43D881120', 9],
//   ['D8005AC2A8F0', 1],
//   ['F600BC2D8F', 0],
//   ['9C005AC2F8F0', 0],
//   ['9C0141080250320F1802104A08', 1],
// ];

function partTwo(input: string) {
  const packet = getPacket(input);
  return getEvaluation(packet);
}

function getEvaluation(packet: Packet): number {
  switch (packet.typeId) {
    case '0':
      // Type ID 0 - Sum packets.
      // Their value is the sum of the values of their sub-packets.
      // If they only have a single sub-packet, their value is the value of the sub-packet.
      return packet.subpackets
        .map(getEvaluation)
        .reduce((total, v) => total + v);
    case '1':
      // Type ID 1 - Product packets.
      // Their value is the result of multiplying together the values of their sub-packets.
      // If they only have a single sub-packet, their value is the value of the sub-packet.
      return packet.subpackets
        .map(getEvaluation)
        .reduce((total, v) => total * v);
    case '2':
      // Type ID 2 - Minimum packets
      // Their value is the minimum of the values of their sub-packets.
      return Math.min(...packet.subpackets.map(getEvaluation));
    case '3':
      // Type ID 3 - Maximum packets
      // Their value is the maximum of the values of their sub-packets.
      return Math.max(...packet.subpackets.map(getEvaluation));
    case '4':
      if (!packet.result) {
        throw new Error('No result found on type ID 4 packet.');
      }
      return packet.result;
    case '5': {
      // Type ID 5 - Greater than packets
      // Their value is 1 if the value of the first sub-packet is greater than the value of the
      // second sub-packet; otherwise, their value is 0. These packets always have exactly two sub-packets.
      const [first, second] = packet.subpackets;
      if (getEvaluation(first) > getEvaluation(second)) {
        return 1;
      }
      return 0;
    }
    case '6': {
      // Type ID 6 - Less than packets
      // Their value is 1 if the value of the first sub-packet is less than the value of the
      // second sub-packet; otherwise, their value is 0. These packets always have exactly two sub-packets.
      const [first, second] = packet.subpackets;
      if (getEvaluation(first) < getEvaluation(second)) {
        return 1;
      }
      return 0;
    }
    case '7': {
      // Type ID 7 - Equal to packets
      // their value is 1 if the value of the first sub-packet is equal to the value of the
      // second sub-packet; otherwise, their value is 0. These packets always have exactly two sub-packets.
      const [first, second] = packet.subpackets;
      if (getEvaluation(first) === getEvaluation(second)) {
        return 1;
      }
      return 0;
    }
    default:
      throw new Error('Type ID out of bounds.');
  }
}

export { partOne, partTwo };
