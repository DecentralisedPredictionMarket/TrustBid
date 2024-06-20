import { ethers } from "hardhat";

async function main() {
  const [signer] = await ethers.getSigners();
  
  console.log("Signer ", signer.address);

  const tokenAddress = "0xab4f68A873eC164D9d52467D92469fC313Cf64F6";

  const PredictionMarketFactory = await ethers.deployContract("PredictionMarketFactory", [tokenAddress,signer.address]);

  await PredictionMarketFactory.waitForDeployment();

  console.log(
    `prediction market deployed to ${PredictionMarketFactory.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});