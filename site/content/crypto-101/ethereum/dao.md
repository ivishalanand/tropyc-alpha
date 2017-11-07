+++
title = "DAO"
date = 2017-08-02T17:16:36+02:00
description = "Decentralised Autonomous Organisations offer an alternative to traditional asset management firms. However, The DAO was a failure and led to a major event in the crypto world: a chain split."
draft = false
bref = "Ethereum, Part IV"
toc = true
+++

Putting your money in a conventional investment management firm means trusting a third party with your wealth.  
At the end of the day, how do you know if your money is in safe hands? It could potentially be a Ponzi scheme, or worse the managers could flee with all the money and without notice.  

What’s the solution?

## DAO Concept

Imagine an investment management firm where shareholders do not have to trust any fund managers with their money: because **shareholders would be the managers**.  

Well, it's possible, and it's called a Decentralised Autonomous Organisation (DAO).  

A DAO is a leaderless entity that runs on a set of rules programmed by smart contracts.  
It automates interactions within an organisation and gives a right to its token holders: would it be governance, profit sharing or portfolio management.  

Through a voting system, DAO members can interact amongst each other and manage the organisation’s funds without trusting anyone but other investors alike.

{{< img src="crypto-101/infographics/info-eth4-1.png" class="img-fluid" alt="DAO" >}}

The same way Bitcoin does not require an intermediary in a transaction and offers an alternative to the current financial system, a DAO can make companies operate without a complex hierarchical system and manual processes.  

It digitalises and automates a pre-defined set of rules for organisations: it is not confined to financial interactions but can be applied to any sort of decision or governance problematic.  

The goal here is to make decision-making more transparent, efficient and collaborative.

Since a DAO is built on programs, changing the purpose or some pre-defined operations can be deemed complex as the rules are set in stone.   

If a smart contract has a bug, developers may not be able to fix the issue. As such, depending on how smart contracts are built, they could be immutable and therefore jeopardise the utility of a DAO, in case a programming mistake occurs.

## First implementation

The first attempt to set up such an organisation at scale was initiated on the Ethereum network and launched in 2016 as “The DAO”.  
It started as an Initial Coin Offering, where contributors purchased DAO tokens against Ether.  

The organisation's purpose was to become the first decentralised venture capital, where participants would decide which projects would raise funds.  

As such, the more stake you hold (in form of tokens), the more influential your vote is.

The Ethereum Foundation developing team set up The DAO by programming all the smart contracts that made the organisation functional. This is how it went:

1. Developers built the DAO smart contracts on the Ethereum Blockchain.
2. An Initial Coin Offering sold DAO tokens against Ether during 28 days.
3. At the end of the crowdsale, a smart contract disbursed the tokens automatically to investors: the DAO went live.
4. Anyone could raise funds on the DAO platform: token holders would either accept or reject proposals.

The crowdsale launched on the 30th of April 2016 and closed on the 28th of May, when the tokens were sent to contributors.  
It was such a hit that the DAO gathered more than 18,000 investors and approximately 11.5 million Ether: that was more than 14% of the total Ether supply issued to date.   

At this point, the DAO was worth about 150 million USD – something developers did not expect despite an aggressive marketing campaign.  
Many independent developers warned the Ethereum community that the DAO was not secure enough to hold such capital. The issue was not about the Ethereum network itself, but the DAO's foundation: its smart contracts.  

In fact, only one address held the entire DAO funds and was controlled by a smart contract, a red flag for most blockchain and cryptocurrency enthusiasts.

## DAO hack and fork

Unfortunately, the vulnerability got exploited only weeks after the DAO launch.  

An unknown attacker hacked the smart contract that held the funds and started draining Ether from the crowdsale.  
Nothing could be done, as altering smart contracts code is not that easy once it is deployed on a blockchain. Token holders witnessed the attack live, without being able to do much.  

Some attempted to separate the funds by pitching a project to the DAO, but this required token holders to vote and reach consensus: an action that was not feasible in such short notice.  

Smart contracts are autonomous agents, independent from any third party or centralised influence: once deployed, the code is the ultimate decision maker.  

As such, the attacker was technically speaking, _following the DAO rules_ (coded in smart contracts) that were introduced by the Ethereum Foundation team.  

According to the DAO and Ethereum network rules, this action was valid as it was coded within the smart contracts; however, for investors, it was clearly a programming mistake.  

He or she moved the funds to a copycat DAO, nicknamed “The Child DAO” – where all stolen Ether were locked during a 28-day crowdsale period (the vulnerability was to replicate the original DAO). 

The address with the funds was ultimately visible on the blockchain, and any attempts at that time to cash out the Ether would potentially disclose the attacker’s identity. The hacker must have opened a large short position on Ether to benefit from the attack (by betting that the price goes down).

The hack had an enormous impact on the cryptocurrency world and eventually led to a massive price crash.  
By the 18th of June, approximately 3.6 million Ether got stolen from the decentralised fund.  

In less than 48 hours, Ether price dropped from 20$ to 11$, and the DAO market capitalisation collapsed from 230 million USD to 85 million USD.  

The Ethereum foundation, the team of developers that both deployed the Ethereum network and the DAO, offered two solutions to fix the hack.

<div class="container my-4">
  <div class="row align-items-center">
    <div class="col text-center">
      {{< img src="crypto-101/icons/soft-fork.svg" class="img-fluid" alt="Soft fork" >}}
    </div>
    <div class="col text-left">
      <h3>Soft fork</h3>
      <p>A soft fork would freeze the Ether held by the Child DAO and stolen by the hacker. This solution required consensus to deploy a smart contract (piece of code) that would blacklist the stolen funds. Because the network is decentralised, permissionless and immutable, the only way to add a new rule would have been to convince 51% of nodes to implement the change.</p>
    </div>
   </div>
 </div>

<div class="container my-4">
  <div class="row align-items-center">
    <div class="col text-left">
      <h3>Hard fork</h3>
      <p>The second solution was more brutal: the idea is to rewind the blockchain back to a block before the DAO hack. The hard fork would therefore delete all transactions that occurred after the attack and return to DAO token holders the Ether they invested in the project. Similarly nodes would need to reach a consensus.</p>
    </div>
    <div class="col text-center">
      {{< img src="crypto-101/icons/hard-fork.svg" class="img-fluid" alt="Hard fork" >}}
    </div>
   </div>
 </div>

## Response

Most of Ethereum “influencers” from the foundation took a public stance for the hard fork and proposed to rewind to a block before the attack – something that was not well accepted in the cryptocurrency community.  

Because the hacker leveraged an anomaly and executed *valid actions* of the DAO’s smart contracts, this issue has become more of a philosophical question: 

* Should we consider a blockchain immutable and irreversible no matter what? 
* Or on the other hand, in case of a mistake or dispute, are we allowed to change the code and rewind in time?

What is the single source of truth? Code or Community?

An obvious analogy would be with the global financial crisis of 2008, where banks took substantial risks - hoping for high returns - but when the economy crashed, they still got bailed out by the government.  

Such public policy can incentivise market players to make riskier investment decisions in the future. They might be thinking that no matter what, they will be rescued by public authorities in case something goes bad.

Adopting a similar approach with the DAO, would rescue investors from losing their funds to the hacker, however, the fact that the Ethereum Foundation developed and promoted the DAO as well as proposed a solution to the hack raised the issue of network centralisation.  

Ethereum aspires to become the global computer by introducing decentralised applications at scale – it should therefore not be controlled by any central authority.

<div class="container my-4">
  <div class="row text-center align-items-center">
    <div class="col">
      {{< img src="crypto-101/icons/no-fork.svg" class="img-fluid" alt="No fork" >}}
      <p class="font-weight-bold mt-2">No Fork thanks</p>
      <p class="small">DAO token holders/contributors knew it was an experimental project.</p>
      <p class="small">In cryptocurrency, hacking <b>IS</b> the main risk.</p>
    </div>
    <div class="col">
      {{< img src="crypto-101/icons/fork-please.svg" class="img-fluid" alt="Fork please" >}}
      <p class="font-weight-bold mt-2">Fork please</p>
      <p class="small">14% of the entire Ether supply was stolen by the hacker.</p>
      <p class="small">The loss would have a severe impact on Ethereum. The DAO is too big to fail.</p>
    </div>
  </div>
</div>

## The hard fork

In July 2016, A majority in Ethereum community ultimately decided to hard fork the blockchain and rewind to a block before the DAO attack so that DAO token holders could get their investment back.  

The DAO held approximately 14% of the total supply of Ether till date: it was considered too big to fail and might have jeopardised the future of Ethereum.  

However, some developers disagreed with this decision and argued a blockchain should be tamper-proof and immutable. Therefore, some miners decided not to implement the hard fork and continued to mine the Ethereum blockchain on which the attack occurred.

Till date, there are now two Ethereum blockchains:

* Ethereum ETH, DAO attack was deleted from the records.
* Ethereum ETC, DAO token holders lost all of their investment.

Anyone who held Ether before the split, had **the same balance in Ethereum Classic** after the split.  

For instance, if you had 100 ETH before the fork, you would hold 100 ETH and 100 ETC after the fork on the same public address.  
Exchanges were ultimately forced to list ETC as a tradable asset because they were holding the ETC of their customers that held ETH tokens on their platform.  

The underlying question is whether or not ETC has tangible value and if so, how to price it.

This is still a debatable topic, but as long as miners invest their time, energy and hardware on the networkm and people believe in the project, the Ethereum classic blockchain will have value.  

Because ETC is a copycat of the ETH blockchain, both tokens had the same utility at that time. Ethereum Classic forked from an open-source application and is successful _because_ it has a community of developers, miners and enthusiasts.  

While ETC started off from a new ideology, it is worth noting that miners allocated resources to the network: it has become an asset with tangible value.
