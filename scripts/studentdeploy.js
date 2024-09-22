async function main(){
    const Student = await ethers.getContractFactory("Student");
    const student = await Student.deploy();

    console.log(`Student contract deployed to: ${student.target}`);

    await student.setStudent("Niomi", 46);
    const name = await student.name();
    const id = await student.id();

    console.log(`Student name = ${name}`);
    console.log(`Student id = ${id}`);
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.log(`Error caught in main function: ${err}`);
    });