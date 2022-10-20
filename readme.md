# 💎 Welcome to info.diamonds 💎

## **Diamonds**
### **EIP 2535: Diamonds, Multi-Facet Proxy**
Welcome to info.diamonds, an unofficial documentation site for Diamonds, the Multi-Facet Proxy (EIP 2535).

# **Resources**

## **Official**

* [EIP2535 Diamonds](https://eips.ethereum.org/EIPS/eip-2535) - Standard.
* [EIP2535 Diamonds discussion thread](https://github.com/ethereum/EIPs/issues/2535) - Github issue created to discuss Diamonds.
* [Twitter @eip2535](https://twitter.com/eip2535) - Twitter handle.
* [EIP2535 Blog](https://eip2535diamonds.substack.com/) - Technical articles about diamonds.
* [EIP2535 Discord Server](https://discord.gg/kQewPw2) - Discord server for discussing EIP2535 Diamonds and related things.
* [Diamond reference implementation comparisons](https://github.com/mudgen/diamond) - Compares Diamond reference implementations.
* [diamond-1-hardhat](https://github.com/mudgen/diamond-1-hardhat) - Simple Diamond reference implementation.
* [diamond-2-hardhat](https://github.com/mudgen/diamond-2-hardhat) - Gas-optimized Diamond reference implementation.
* [diamond-3-hardhat](https://github.com/mudgen/diamond-3-hardhat) - Simple loupe (introspecting functions) Diamond reference implementation.

## **Diamonds**

* [Introduction to EIP-2535 Diamonds](https://eip2535diamonds.substack.com/p/introduction-to-the-diamond-standard?s=w) 
* [EIP-2535: A standard for organizing modular smart contract system.](https://soliditydeveloper.com/eip-2535) 
* [Diamond Loupe Functions](https://dev.to/mudgen/why-loupe-functions-for-diamonds-1kc3) 
* [How to Share Functions Between Facets of a Diamond](https://eip2535diamonds.substack.com/p/how-to-share-functions-between-facets?s=w)
* [A Beginner’s Guide to The Diamond Standard Proxy](https://blessingemah.medium.com/a-beginners-guide-to-the-diamond-standard-proxy-b57076365403) 
* [Idiots Guide to Using an EIP-2535 Diamond Proxy](https://andrewedwards.substack.com/p/coming-soon)
* [EIP 2535: Diamond standard explained — Part 1: Why diamonds?](https://bitsbyblocks.com/eip-2535-diamond-standard-explained-part-1-why-diamonds/)
* [EIP 2535: Diamond standard explained – Part 2: What are diamonds and how they work](https://bitsbyblocks.com/eip-2535-diamond-standard-explained-part-2-what-are-diamonds-and-how-they-work/)
* [EIP 2535: Diamond standard explained – Part 3: Understanding storage patterns in diamonds](https://bitsbyblocks.com/eip-2535-diamond-standard-explained-part-3-understanding-storage-patterns-in-diamonds/)
* [Understanding delegatecall And How to Use It Safely](https://eip2535diamonds.substack.com/p/understanding-delegatecall-and-how)

## **Diamond Storage**

* [How Diamond Storage Works](https://dev.to/mudgen/how-diamond-storage-works-90e)
* [New Storage Layout For Proxy Contracts and Diamonds](https://medium.com/1milliondevs/new-storage-layout-for-proxy-contracts-and-diamonds-98d01d0eadb)
* [AppStorage Pattern for State Variables in Solidity](https://eip2535diamonds.substack.com/p/appstorage-pattern-for-state-variables?s=w)
* [Upgradeable smart contracts using the Diamond Standard](https://hiddentao.com/archives/2020/05/28/upgradeable-smart-contracts-using-diamond-standard)

## **Diamond Upgrades**

* [Diamond Upgrades](https://eip2535diamonds.substack.com/p/diamond-upgrades?s=w)
* [Example of Adding New State Variables in Diamond Upgrade](https://eip2535diamonds.substack.com/p/example-of-a-diamond-upgrade?s=w)

## **Diamonds in Projects**
* [The Diamond Standard: A new paradigm for upgradeability](https://medium.com/derivadex/the-diamond-standard-a-new-paradigm-for-upgradeability-569121a08954) - *DerivaDEX*
* [Smart Contracts as Apps](https://0xhabitat.substack.com/p/33) - *0xhabitat*
* [Dark Forest & the Diamond Standard](https://blog.zkga.me/dark-forest-and-the-diamond-standard) - *Dark Forest* 
* [We like the (EIP-2535) Diamonds](https://blog.premia.finance/we-like-the-eip-2535-diamonds-90184b2e6741) - *Premia Finance*
* [Why Gotchivault is upgrading to the Diamond standard](https://medium.com/@bearded.eth/diamonds-are-a-proxys-best-friends-c302cca82203) 
* [Handling multiple tokens, with a modern solidity architecture via Diamonds & ERC1155](https://dev.to/nohehf/handling-multiple-tokens-with-a-modern-solidity-architecture-via-diamonds-erc1155-1h7e)
* [Smart contract packages — upgradeability for normal people](https://medium.com/@tjvs/smart-contract-packages-upgradeability-for-normal-people-8646e817e196)

## **Libraries**

* [SolidState Solidity](https://github.com/solidstate-network/solidstate-solidity) 
* [ERC20 Facet](https://github.com/danfinlay/erc20-diamond-facet)
* [ERC721A-Upgradeable](https://github.com/chiru-labs/ERC721A-Upgradeable)
* [ERC1155-DiamondStorage](https://github.com/rachit2501/ERC1155-Diamond)

## **Tools**
* [Louper - The Ethereum Diamond Inspector](https://louper.dev/) 
* [hardhat-diamond-abi](https://github.com/projectsophon/hardhat-diamond-abi)
* [hardhat-deploy](https://github.com/wighawag/hardhat-deploy#builtin-in-support-for-diamonds-eip2535) 
* [Inspector Facet](https://github.com/bugout-dev/inspector-facet)
* [Zem](https://github.com/anders-torbjornsen/zem) 
* [Foundry-Hardhat-Diamonds](https://github.com/Timidan/Foundry-Hardhat-Diamonds) 
* [0xpm](https://0xpm.app/) 
* [diamond-etherscan](https://github.com/zdenham/diamond-etherscan) 
* [Diamantair](https://diamantaire.xyz/)
* [diamond-diff](https://www.npmjs.com/package/diamond-diff) 


## **Audits**

### **Omniscia**

*  [Smart Contract Audit](https://omniscia.io/alliance-block-multitoken-bridge/) - Omniscia published a smart contract audit of the diamond implementing AllianceBlock’s token bridge, which uses the [diamond-3](https://github.com/mudgen/diamond-3-hardhat) implementation.

*  [Smart Contract Audit](https://omniscia.io/seen-haus-nft-auction-sales/) - Omniscia published a smart contract audit of the [Seen.Haus Marketplace Diamond](https://github.com/seen-haus/seen-contracts), which uses the [diamond-3](https://github.com/mudgen/diamond-3-hardhat) implementation, modified for role-based access rather than single-owner.

### **Quantstamp**

* [Smart Contract Audit](https://certificate.quantstamp.com/full/aavegotchi-ghst-staking) - Quantstamp published a smart contract audit of Aavegotchi’s staking diamond which used the [diamond-2](https://github.com/mudgen/diamond-2-hardhat) implementation.

* [Smart Contract Audit](https://raw.githubusercontent.com/BarnBridge/BarnBridge-PM/master/audits/BarnBridge%20DAO%20audit%20by%20Quanstamp.pdf) - Quantstamp published a smart contract audit of BarnBridge’s [Barn diamond](https://github.com/BarnBridge/BarnBridge-Barn), which uses BarnBridge’s own implementation of EIP-2535 Diamonds based on diamond-1.

* [Smart Contract Audit](https://certificate.quantstamp.com/full/deriva-dex) - Quantstamp published a smart contract audit of DerivaDEX’s [governance diamond](https://gitlab.com/derivadex/dips/-/tree/master/packages/protocol/contracts), which uses the [diamond-3](https://github.com/mudgen/diamond-3-hardhat) implementation.
### **MixBytes**

* [Smart Contract Audit](https://github.com/pie-dao/audits/blob/main/Mixbytes%20-%20ExperiPie_Smart_Contrac%202020-12-11.pdf) - MixBytes published a smart contract audit of PieDAO’s [ExperiPie diamond](https://github.com/pie-dao/initialisable-diamond), which uses the diamond-2 implementation.

### **Haechi Audit**

* [Smart Contract Audit](https://github.com/BarnBridge/BarnBridge-Barn) - Haechi Audit published a smart contract audit of BarnBridge’s Barn diamond, which uses BarnBridge’s own implementation of EIP-2535 Diamonds based on diamond-1.

