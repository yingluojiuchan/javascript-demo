//命名导出
export let school = "尚硅谷" //把本模块中的私有成员导出，供其他模块使用
export function teach() {
    console.log("我们可以教给你开发技能")
}

/* let  school="尚硅谷"
function findJob() {
    console.log("我们可以帮助你找工作！！")
}

export { school, findJob }   亦可，相对于前者优先考虑使用这种写法，因为可以在脚本尾部一眼看清楚输出的变量*/