const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { log } = console;

const { errorStartLine, errorEndLine } = require('./constants');

const setupFolder = (projectPath) => {
  try {
    fs.mkdirSync(projectPath);
  } catch (error) {
    if (error.code === 'EEXIST') {
      log('\x1b[31m%s\x1b[0m', errorStartLine);
      log(projectPath);
      log(
        '\x1b[31m%s\x1b[0m',
        `🚨 The folder ${projectPath} already exist in the current directory, please give it another name.`,
      );
    } else {
      log('\x1b[31m%s\x1b[0m', errorStartLine);
      log(error);
      log('\x1b[31m%s\x1b[0m', errorEndLine);
    }

    process.exit(1);
  }
};

const setupPackage = (projectName, projectPath) => {
  log('========================= 🚀 S T A R T 🚀 =========================');
  log('Using npm...');
  log('');
  log('Installing dependencies:');
  log('\x1b[32m%s\x1b[0m', '- React');
  log('\x1b[32m%s\x1b[0m', '- React-DOM');
  log('');
  log('Installing devDependencies:');
  log('\x1b[32m%s\x1b[0m', '- TypeScript');
  log('\x1b[32m%s\x1b[0m', '- ESLint');
  log('\x1b[32m%s\x1b[0m', '- Vite');
  log('\x1b[32m%s\x1b[0m', '- Jest');
  log('\x1b[32m%s\x1b[0m', '- Testing-Library');
  log('\x1b[32m%s\x1b[0m', '- Cypress');
  log('');
  log('⭐ React Starter Kit ⭐');
  log('🥰 Create by davidyang2149');
  log('🚀 From https://github.com/DavidYang2149/react-starter');
  log('');
  log(`🚀 Creating project ${projectName}...`);
  log('');
  log('🚚 Downloading files:');
  execSync(`git clone --depth 1 https://github.com/DavidYang2149/react-starter ${projectName}`);

  if (projectName !== '.') {
    process.chdir(projectPath);
  }

  log('🥰 Download completed!');
  log('');

  log('📦 Installing dependencies:');
  execSync('npm install');
  log('');
  log('🔥 Removing useless files:');
  fs.unlinkSync(path.join(projectPath, 'LICENSE'));

  fs.rmSync('./.git', { recursive: true });
  fs.rmSync('./bin', { recursive: true });

  execSync('npm uninstall commander');

  log('');
  log('\x1b[36m%s\x1b[0m', 'Successfully installed!');
  log('');
  log('\x1b[35m%s\x1b[0m', '🎉 The installation is done, ready to use. Happy coding!');
  log('========================= 🎉 E N D 🎉 =========================');
  log('');

  fs.readFile('./package.json', 'utf8', (err, data) => {
    const { version } = JSON.parse(data);
    log(`🏷️ Version: ${version}`);
  });
};

module.exports = { setupFolder, setupPackage };
