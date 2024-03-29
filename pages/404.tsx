import { FONT_SIZE } from '../source/config/theme';

function Custom404() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>404</h1>
      <div style={{ fontSize: FONT_SIZE[2] }}>
        <pre
          dangerouslySetInnerHTML={{
            __html: `⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠛⠉⠉⠁⠀⠀⠀⠀⠈⢷⡀⠀⠀⠀
⢸⣿⣿⣿⣿⣿⣿⣿⠟⠉⠀⠀⠀⠀⠀⠀⠀⣀⠤⠤⠀⠀⠀⠀⠀⠀⢻⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠉⣀⠤⠤⢄⡀⠀⠀⠀⠀⢾⠀⠀⠀
⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣸⣦⣀⠀
⣿⣿⣿⣿⣿⣿⠇⠀⠀⢀⣀⣠⣤⣤⣤⣴⣶⣶⣦⣤⣤⣾⡟⠋⢉⡉⠁⡟⢿⡄
⣿⣿⣿⣿⣿⣿⢂⣠⡾⣿⠋⠉⠁⢠⣦⢄⠀⠈⣿⠀⠀⣿⡇⢴⡻⣷⡢⣧⢸⣷
⢻⣿⣿⣿⣿⣿⠟⠉⠀⣿⡀⠀⢞⣁⣛⠤⠃⠀⣿⠀⠀⢸⣷⣀⣸⣖⣀⣸⣿⡿
⢠⡟⠋⠻⠿⠟⠀⠀⠀⢿⣧⣤⣤⣴⣾⣿⡤⠶⠟⠀⠀⠀⠻⡉⠉⠉⠁⠀⠈⣷
⢸⣄⠈⢹⠂⠀⠀⠀⠀⠀⠉⠉⠉⠁⠀⠀⠀⠀⢀⡄⠀⠀⠀⠙⠢⢄⠀⠀⠀⣿
⠀⠹⣦⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⢏⡤⢤⣀⣀⡠⠏⠀⠀⠐⢲⡇
⠀⠀⠘⣷⠂⠀⠀⠀⠀⠀⠀⣀⠀⠀⠤⠂⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⢸⡇
⠀⠀⠀⢹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣊⣯⣽⣵⣷⡇⠀⠀⠀⡇
⠀⠀⠀⠈⣧⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⡿⠿⠛⠃⠀⠀⠀⣇
⠀⠀⠀⠀⢹⡀⠀⠹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠋⠉⠠⠒⠂⠀⠀⠀⠀⠀⢸
⠀⠀⠀⠀⠘⡇⠀⠀⠱⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠏
⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠴⠀⡏`,
          }}
        />
        This page ain&apos;t right, I&apos;ll tell ya hwat.
      </div>
    </div>
  );
}

export default Custom404;
