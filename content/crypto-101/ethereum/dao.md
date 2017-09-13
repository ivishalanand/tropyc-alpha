+++
title = "DAO"
date = 2017-08-02T17:16:36+02:00
description = "Decentralised Autonomous Organisations offer an alternative to traditional asset management firms. However, The DAO was a failure and led to a major event in the crypto world:  a hard fork."
weight = 40
draft = false
bref = "Ethereum, Chapter IV"
toc = true
+++



Putting your money in a conventional investment management firm means trusting a third party with your wealth.
At the end of the day, how do you know if your money is in safe hands? 
It could potentially be a Ponzi scheme or worse the managers could flee with all the money and without notice.
What’s the solution? 




## DAO Concept



Imagine an investment management firm where shareholders do not have to trust any fund manager with their money: because shareholders would be the managers. 
Well, this is exactly what a Decentralised Autonomous Organisation (DAO) can achieve.
A Decentralised Autonomous Organisation is a leaderless entity that is run on a set of rules programmed by smart contracts. 
It automates interactions within an organisation company would it be governance, profit sharing or portfolio management. 
Through a voting system, DAO members can interact amongst each other and manage the organisation’s funds without trusting anyone but other investors alike.




{{< img src="crypto-101/infographics/info-eth4-1.png" class="img-fluid" alt="dao" >}}




The same way Bitcoin does not require a middleman in a transaction and offers an alternative to the current financial system, a DAO can make companies operate without a complex hierarchical system and manual processes. It digitalises and automates a pre-defined set of rules for organisations: it is not confined monetary interaction but should be considered for any sort of decision or governance problematic.
The goal here is to make decision making more transparent, efficient and collaborative.



Since a DAO is built on programs, changing the purpose or some pre-defined operations can be deemed complex as the rules are hard-coded. In the event a smart contract has a glitch, developers may not be able to fix the issue. As such, depending on how they are built smart contracts can be immutable and therefore jeopardize the utility of a DAO.





## First implementation



The first attempt to set up such an organisation at scale was initiated on the Ethereum network and launched in 2016 as “The DAO”.
It started as an Initial Coin Offering, where tokens were disbursed to contributors against Ether. 
The organisation's purpose was to become the first decentralised venture capital, where participants would vote for which projects the DAO would invest in. 
As such, the more stake (token) you hold, the more influential your vote is.

The Ethereum Foundation developing team set up The DAO by programming all the smart contracts that made the organisation functional. This is how it went:


1.    Developers built the DAO smart contracts on the Ethereum Blockchain.
2.    An Initial Coin Offerings sold DAO tokens against Ether during 28 days
3.    At the end of crowdsale, a smart contract disbursed automatically the tokens to investors: the DAO went live
4.    Anyone could raise funds on the DAO platform: token holders would either accept or reject proposals. 



The crowdsale launched on the 30th of April 2016 and closed on the 28th of May, when the tokens were disbursed to contributors. 
It was such a hit, that the DAO gathered more than 18,000 investors and approximately 14% of the total Ether supply issued to date: more than 11.5 million Ether. 
At this point of time, the DAO was worth about 150 million USD – something developers did not expect despite an aggressive marketing campaign.

Many independent developers warned the Ethereum community that the DAO was not secure enough to hold this amount of capital. 
The issue was not about the Ethereum network itself, but the smart contracts on which the DAO was built on. 
In fact, only one address held the entire DAO funds and was controlled by a smart contract, a red flag for most blockchain and cryptocurrency enthusiasts.




## DAO hack and fork


Unfortunately, the vulnerability got exploited only weeks after the DAO launch. 
An unknown attacker hacked the smart contract that held the funds and started draining Ether from the crowdsale.  
Nothing could be done as altering smart contracts code is not that easy once it’s deployed on a blockchain: token holders witnessed the attack live without being able to do much.  
Some attempted to separate the funds by pitching a project to the DAO, but this required token holders to vote and reach consensus: an action that was not feasible in such short notice.
Smart contracts are autonomous agents, independent from any third party or centralised influence: once deployed, the code is the ultimate decision maker.

As such, the attacker was technically speaking, **_following the DAO rules_** (hard coded in smart contracts) that were introduced by the Ethereum Foundation team. 
For the Ethereum network, this action was valid as it was deemed correct by the smart contracts, however, for the investors, it was clearly a programming mistake.

He or She moved the funds to a copycat DAO, nicknamed “The Child DAO” – where all stolen Ether were locked for a 28-day crowdsale period (as it was a replica of the original DAO). 
The address with the funds was ultimately visible on the blockchain: any attempts to cash out the Ether would potentially disclose the attacker’s identity. The hacker must have open a large shorting position on Ether to lock profits from the attacks. (bets that the price goes down)

The hack had a huge impact on the cryptocurrency world and eventually led to a price crash.
By the 18th of June, approximately 3.6 million Ether got stolen from the decentralised fund. 
In less than 48 hours, Ether price dropped from 20$ to 11$, and the DAO market capitalisation collapsed from 230 million USD to 85 million USD.

The Ethereum foundation, the team of developers that both deployed the Ethereum network and the DAO, offered two solutions to fix the hack.



### Soft fork


<div class="container my-4">
  <div class="row align-items-center">
    <div class="col text-center">
     {{< img src="crypto-101/icons/soft-fork.svg" class="img-fluid" alt="soft-fork" >}}
    </div>
    <div class="col text-center">
      <p>A soft fork would freeze the assets of the Child DAO and the Ethers stolen by the hacker. This solution required the network to accept the deployment of a smart contract (piece of code) that would blacklist the stolen funds. Because the network is decentralised, permission less and immutable, the only way to add a new rule is to convince 51% of all nodes to make the change happen.</p>
    </div>
   </div>
 </div>



### Hard fork


<div class="container my-4">
  <div class="row align-items-center">
    <div class="col text-left">
     <p>The second solution is more brutal :  the idea is to rewind blockchain back to a block before the DAO hack. The hard fork would therefore delete all transaction history that occurred after the attack and return to DAO token holders the Ether they invested in the project.</p>  
    </div>
    <div class="col text-center">
     {{< img src="crypto-101/icons/hard-fork.svg" class="img-fluid" alt="hard-fork" >}}
    </div>
   </div>
 </div>
 
 
 
 ## Response
 
 
 Most Ethereum “influencers” from the foundation took a public stand for the hard fork and proposed to rewind back to a block before the attack – something that was not well accepted in the cryptocurrency community.
Because the hacker leveraged an anomaly and performed *valid actions* of the DAO’s smart contracts, this issue has become more of a philosophical question: 

* Should we consider a blockchain immutable and irreversible no matter what? 
* Or on the other hand, in case of a mistake or dispute, are we allowed to change the code and rewind back in time?

What is the single source of truth? Code or People's interest?

An obvious analogy would be with the global financial crisis of 2008, where banks took substantial risks - hoping for high returns - but when the economy crashed, they still got bailed out by the government. Such public policy can incentivize market players to make riskier investment decisions in the future. They might be thinking that no matter what, they will be rescued by public authorities in case something goes bad.

Adopting a similar approach with the DAO, would rescue investors from the losing their funds to the hacker, however the fact that the Ethereum Foundation developed and promoted the DAO as well as proposed a solution to the hack raises the issue of network centralization. Ethereum aspires to become the global computer by introducing decentralised applications at scale – it should therefore not be controlled by any central authority.


<div class="container my-4">
  <div class="row text-center align-items-center">
    <div class="col">
      {{< img src="crypto-101/icons/no-fork.svg" class="img-fluid" alt="no-fork" >}}
      <p class="font-weight-bold mt-2">No Fork thanks</p>
      <p class="small">DAO token holders contributors knew it was an experimental project. </p>
      <p class="small">In cryptocurrency, hacking **IS** the main risk.</p>
    </div>
    <div class="col">
      {{< img src="crypto-101/icons/fork-please.svg" class="img-fluid" alt="fork-please" >}}
      <p class="font-weight-bold mt-2">Fork please</p>
      <p class="small">14% of the entity Ether supply was stolen by the hacker.</p>
      <p class="small">The incurred loss might be _“too big to fail”_ for Ethereum</p>
    </div>
  </div>
</div>




## The hard fork



In July 2016, A majority Ethereum community ultimately decided to hard fork the blockchain and rewind back to a block before the DAO attack so that token holders could get their investment back. 
The DAO held approximately 15% of the total supply of Ether till date, it was considered too big to fail and may have jeopardized the future of Ethereum.
However, some developers disagreed with this decision and argued a blockchain should be tamper-proof and immutable. Therefore, some miners decided not to hard fork and continued to mine the Ethereum blockchain on which the attack occurred.

Till date, there are now two Ethereum blockchains:

* Ethereum ETH, DAO attack was deleted from the records.
* Ethereum ETC, DAO token holders lost all of their investment.

Anyone who held Ether before the split had the same balance in Ethereum Classic after the split. For instance, if you had 100 ETH before the fork, you would hold 100 ETH and 100 ETC after the fork. 

Exchanges were ultimately forced to list ETC as a tradable asset because they were holding the ETC of every of their customers that held ETH tokens in their portfolio.

The underlying question is whether or not ETC has tangible value and if so, how to price it. 

This is still a debatable topic, but as long as miners invest their time, energy and hardware on the network and people believe in the project, the Ethereum classic blockchain will have value.

Because ETC is a copycat of the ETH blockchain, both tokens had identical utility at that time. Ethereum Classic forked from an open-source application, and is successful _because_ it is followed by developers, miners and enthusiasts. 
While ETC started off from a new ideology, it is important to notify that miners allocated computational power, energy and time to network: it has become a tangible asset.


