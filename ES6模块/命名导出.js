//命名导出
let school="尚硅谷"
function teach() {
    console.log("我们可以教给你开发技能")
}

export { school, teach } //导出本模块中的私有成员，供其他模块使用

/* export let school = "尚硅谷"
export function teach() {
    console.log("我们可以教给你开发技能")
} 亦可，相对于前者不考虑这种写法，因为不能脚本尾部一眼看清楚导出的变量*/