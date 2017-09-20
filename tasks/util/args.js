import yargs from 'yargs';

const args = yargs
/* 输出打包 */
    .options('production',{
        boolean: true,
        default: false,
        describe: 'min all scripts'
    })
/* 监听js文件（热更新） */
    .options('watch',{
        boolean: true,
        default: false,
        describe: 'watch all scripts'
    })
/* 是否输出日志 */
    .options('verbose',{
        boolean: true,
        default: false,
        describe: 'log'
    })

    .options('sourcemaps',{
        describe: 'force ths creation of sourcemaps'
    })

    .options('port',{
        boolean: true,
        default: 8080,
        describe: 'server port'
    })

    .argv