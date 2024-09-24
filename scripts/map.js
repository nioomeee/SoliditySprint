async function main(){
    const map = await ethers.getContractFactory("map");
    const Map = await map.deploy();

    console.log(`Map deployed at: ${Map.target}`);

    await Map.setGrade("0x610178dA211FEF7D417bC0e6FeD39F05609AD788", 95);
    let result = await Map.getGrade("0x610178dA211FEF7D417bC0e6FeD39F05609AD788");

    console.log(`Your grade = ${result}`);
}
main()
.then(()=>process.exit(0))
.catch((err)=>{
    console.error(err);
    process.exit(1);
})
