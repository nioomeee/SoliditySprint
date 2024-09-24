async function main(){
    const Grade = await ethers.getContractFactory("Grade");
    const grade = await Grade.deploy();

    await grade.setName("Niomi");
    await grade.setGrade(50);

    let Name = await grade.stuname();
    let graid = await grade.girade();
    console.log(`Name = ${Name}`);
    console.log(`Name = ${graid}`);

    
}
main()
.then(()=>process.exit(0))
.catch((err)=>{
    console.error(err);
    process.exit(1);
})