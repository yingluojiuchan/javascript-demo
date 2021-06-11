export default {
    school:"尚硅谷",
    change: function () {
        console.log("我们可以改变你！！")
    }
}
let school="尚硅谷"
export { school}
//一个模块只能有一个默认导出，export default相比于export不需要导出的变量名，import时不需要{}
