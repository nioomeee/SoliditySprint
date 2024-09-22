async function main(){
    const Studentrecords = await ethers.getContractFactory("Studentrecords");
    const studentrecords =  await Studentrecords.deploy();
}