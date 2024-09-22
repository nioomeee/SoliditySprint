async function main(){
    const Gradecheck = await ethers.getContractFactory("Gradecheck");
    const gradecheck = await Gradecheck.deploy();

    console.log(`Grade Check deployed at: ${gradecheck.target}`);
    const status= await gradecheck.haspassed(57);
    console.log(`The status of your grades is: ${status}`);
}
main()
.then(()=>process.exit(0))
.catch((err)=>{
    console.error(err);
    process.exit(1);
})