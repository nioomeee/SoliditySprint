async function main(){
    try{
        const HelloWorld = await ethers.getContractFactory("HelloWorld");
        const hello = await HelloWorld.deploy();

        console.log(`Contract instance after deployement: ${hello}`);

        console.log(`Hello World deployed to: ${hello.target}`);
    }

    catch(err){
        console.log(`Deployement failed with error: ${err}`);
    }
}
main()
    .then(()=>process.exit(0))
    .catch((err) => {
        console.error(`Error in main function: ${err}`);
        process.exit(1);
    });