export default {
    school:"尚硅谷",
    change: function () {
        console.log("我们可以改变你！！")
    }
}
let school="尚硅谷"
function teach() {
    console.log("我们可以教给你开发技能")
}

export { school, teach }
//一个模块只能有一个默认导出，export default相比于export不需要导出的变量名，import时不需要{}