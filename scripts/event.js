async function main(){
    const Event = await ethers.getContractFactory("Event");
    const eevent = await Event.deploy();

    console.log(`Event deployed at: ${eevent.target}`);

    await eevent.setGrade("0x610178dA211FEF7D417bC0e6FeD39F05609AD788", 50);
    let grade = await eevent.grades("0x610178dA211FEF7D417bC0e6FeD39F05609AD788");
    console.log(`The grade = ${grade}`);
}
main()
.then(()=>process.exit(0))
.catch((err)=>{
    console.error(err);
    process.exit(1);
})