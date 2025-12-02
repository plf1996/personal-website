#!/usr/bin/env node

/**
 * 下载示例背景视频的脚本
 * 运行：node scripts/download-sample-video.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// 视频URL列表（免费、无版权的示例视频）
const SAMPLE_VIDEOS = [
  {
    name: 'background-sample.mp4',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    description: '火焰效果视频 - 适合活力背景'
  },
  {
    name: 'background-fallback.mp4',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    description: '风景效果视频 - 平静但有动感'
  },
  {
    name: 'background-tech.mp4',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    description: '动态效果视频 - 科技感较强'
  }
];

// 创建视频目录
const videosDir = path.join(__dirname, '../public/videos');
if (!fs.existsSync(videosDir)) {
  fs.mkdirSync(videosDir, { recursive: true });
}

// 下载函数
function downloadVideo(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(videosDir, filename);
    const fileStream = fs.createWriteStream(filePath);

    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fileStream);

        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✅ 已下载: ${filename}`);
          resolve();
        });
      } else {
        fileStream.close();
        fs.unlink(filePath, () => {}); // 删除部分下载的文件
        reject(new Error(`下载失败: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fileStream.close();
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

// 主函数
async function main() {
  console.log('🎬 开始下载示例背景视频...\n');

  for (const video of SAMPLE_VIDEOS) {
    try {
      console.log(`📥 下载中: ${video.description}`);
      await downloadVideo(video.url, video.name);

      // 显示文件大小
      const filePath = path.join(videosDir, video.name);
      const stats = fs.statSync(filePath);
      const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
      console.log(`📁 文件大小: ${fileSizeInMB} MB\n`);

    } catch (error) {
      console.error(`❌ 下载失败: ${video.name}`, error.message);
    }
  }

  console.log('🎉 下载完成！');
  console.log('\n📝 视频文件已保存到: public/videos/');
  console.log('💡 提示: 您可以将自己的视频文件放到此目录下，并命名为 background.mp4');
}

// 运行脚本
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { downloadVideo, SAMPLE_VIDEOS };