/*
 * @Description: 
 * @Author: GuoQin
 * @Date: 2019-10-21 21:48:47
 * @LastEditors: GuoQin
 * @LastEditTime: 2019-10-21 23:54:28
 */
class ReplaceApi {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        const options = this.options;
        compiler.hooks.emit.tap('ReplaceApi', compilation => {
            compilation.chunks.forEach(chunk => {
                chunk.files.forEach(filename => {
                    if (filename.indexOf('.js' > -1)) {
                        const source = compilation.assets[filename].source();

                        options.forEach(optionItem => {
                            const testReg = new RegExp(optionItem.test)
                            if (testReg.test(source)) {
                                const newSource = source.replace(testReg, `${optionItem.target}$&`)
                                compilation.assets[filename] = {
                                    source() {
                                        return newSource
                                    },
                                    size() {
                                        return newSource.length
                                    }
                                }
                            }
                        })
                    }
                })
            })
        })
    }
}
module.exports = ReplaceApi
