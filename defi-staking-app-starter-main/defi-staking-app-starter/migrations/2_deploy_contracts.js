const Tether = artifacts.require('Tether')
const RWD = artifacts.require('RWD')
const DecentralBank = artifacts.require('DecentralBank')

module.exports = async function(deployer, network, accounts) {
  // Deploy Mock Tether Contract
  await deployer.deploy(Tether)
  const tether = await Tether.deployed()

  // Deploy RWD Contract
  await deployer.deploy(RWD)
  const rwd = await RWD.deployed()

  // Deploy RWD Contract
  await deployer.deploy(DecentralBank, rwd.address, tether.address)
  const decentralBank = await DecentralBank.deployed()


  // 모든 리워드 토큰을 decentral bank로 전송
  await rwd.transfer(decentralBank.address, '1000000000000000000000000')

  // 투자자에게 100 Tether 전송
  await tether.transfer(accounts[1], '1000000000000000000')
};