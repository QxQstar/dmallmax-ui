// 在此处填写服务器中的目录
var deployConfig = {
    // dev: 'fe-test-dev',
}


// 服务器接收文件配置
var RECEIVER = 'http://115.182.215.159/receiver.php'
const TARGET_PATH = '/home/work/spw/app/market-mis/'


/********************************** 目录规范及发布配置 **********************************/

// 调试配置
for (var i in deployConfig) {
    let pushConfig = {
        receiver: RECEIVER,
        to: TARGET_PATH + deployConfig[i] + '/webroot'
    };

    fis.media(i)
        .match('/dist/(**).(**)', {
            useHash: false,
            isMod: false,
            release: `/$1`,
            deploy: [
                fis.plugin('http-push', pushConfig)
            ]
        })
}
