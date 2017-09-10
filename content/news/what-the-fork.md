+++
title = "What the fork ? Why Bitcoin Cash split from Bitcoin"
date = 2017-08-30T20:07:03+02:00
categories = ["Bitcoin"]
draft = false
description = "Bitcoin Cash is a new software version of the original chain"
weight = 5
image = "fork"
+++


The crypto world was struck by a rather troubling event on the 1st of August: Bitcoin split into two different currencies: Bitcoin original and Bitcoin Cash. How and why did this happen?



##  Scaling debate

Scaling up the technology aspect of Bitcoin has always been the prime concern of Satoshi Nakamoto and Bitcoin Core developers. In order to make Bitcoin globally accessible and become a viable form of medium of exchange, each Bitcoin blocks need to accommodate every transaction sent to the network.
Bitcoin blocks were initially set to 1 MB: in other words, every 10 minutes the Bitcoin blockchain can only accommodate 1 MB of transactions. A major issue, since each transaction roughly weighs 250 bytes. With exponential market penetration, the Bitcoin blockchain was quickly overrun by the increasing demand for transactions, which led to a network congestion. 
Rather than taking 10 minutes to issue a payment, some transactions could take up to a couple of hours to get confirmed.

A quick fix to congestion is the introduction of replace-by-fee incentivization. If a transaction is pending due to a backlog, Bitcoin users are able to increase the transaction fees they pay, in order to incentivise the miners in selecting their transaction for the next block. This is of course very profitable for miners but problematic for users as their fees increase proportionally to network adoption.


This is the scaling debate. And there are only two solutions to solve this problem.

* Increase the block size
* Reduce the transaction size


A simple analogy would be to compare the Bitcoin blockchain with a highway congested by heavy traffic :

* You can either increase the number of lanes (block size)
* Or force every car to drive at the same pace (transaction size)



## Implementing a solution: soft and hard forks

In order to implement a solution to a blockchain, you need to "fork" it. Forking an open-source project consists of copying the source code and adding a technical feature to it, which therefore creates a new distinct piece of software.

In cryptocurrency, there are two ways of forking: hard fork and soft fork. Both share the same goal of upgrading a piece of software.


### Hard fork

* Definition - It sets up a new rule on the software that is not compatible with previous versions of the software. In a blockchain context, nodes that did not install the upgrade will not be able to interact with the network until they implement the new hard fork rules.
* Implementation - Nodes that have not upgraded will not be able to get any transactions signed until they follow the new rules implemented by the hard fork. In order to mine new blocks, or get transaction mined, nodes are **obliged** to install the update.
* Issues - If a portion of the network decides not to install the hard fork update and keep on mining the old network, this results in a blockchain split. As such in a scenario where miners mine the original blockchain, developers support it and users transact on it the old chain holds value and can keep on existing. The Ethereum DAO fork (link) is a perfect example of a failed hard fork which created two different tokens that hold value: Ethereum and Ethereum Classic.


### Soft fork

* Definition - Unlike hard forks, soft forks are upgrades that are compatible with previous versions of a software. Soft forks let non-upgraded nodes to still interact with the network as the blockchain accepts both new rule and old rule nodes.
* Implementation - The objective of a soft fork is also to implement a new rule onto a blockchain. Typically there is a deadline (block number) for miners and users to reach consensus on the network and follow the same rules (either the new or old ones). This is calculated by network adoption, a percentage of nodes following the same rules (target defined by a % of nodes). Depending on the rules of the soft fork, a consensus is reached if a majority of nodes agree to implement the soft fork, otherwise, the fork fails and the blockchain goes back to the old rules.
* Issues - If a soft fork is adopted by only a minority of hash power, either the software upgrade fails or it can become a hard fork and the chain splits.



## Bitcoin fork

Introducing new technical features to the network comes in the form of Bitcoin Improvement Proposals (BIP): standard documents that describe upgrades to the community.

### SegWit

Regarding Bitcoin's scaling debate, the most controversial software update is the introduction of the Segregated Witness protocol (SegWit) developed by Peter Wuille, a Bitcoin Core developer. 
In order to understand what SegWit offers on the table, let's have a look at the required data to make a transaction happen :

* input = sender details
* output = recipient details
* signature = verification of sender's details

Digital signatures take the most amount of space in a transaction. SegWit reduces the transaction's size by allowing digital signatures to be stored in a new block while still keeping the network secure. In other words, SegWit optimises the space of a Bitcoin block and allows it to store more transaction in the same 1MB block. SegWit implementation does not increase the block size limit but makes the block storage more efficient.

Pros 
* More transaction in one block
* Fewer user transaction fees
* Helps with network congestion

Cons
* Miners earn fewer fees
* Wallets need to be updated
* More resources required to mine a block

SegWit is typically rejected by the mining community since their incentivisation can become drastically decreased. It is important to note that SegWit does not "solve" the scaling debate permanently: if the Bitcoin network gets to grow even more, there might just be another network congestion.


### User Activated Soft Fork (UASF)

Introduced by BIP 148 and designed by Bitcoin Core developers, this technical upgrade through the soft fork, UASF grants fully activated nodes the power to reject any blocks that do not implement SegWit.
Rather than letting miners decides the fate of Bitcoin, UASF let end-users (exchanges, wallets, businesses) have a voice in the debate and attempt to motivate miners in implementing SegWit.

This raises a few issues :
- Requires majority in consensus
- Can take a lot of time
- If consensus is not reached, an unorganised split can occur

Because of this uncertainty, miners designed a contingency plan to mitigate the risk 

### User Activated Hard Fork (UAHF)

Introduced by Bitmain, a Bitcoin mining pool, UAHF is the adoption of a new Bitcoin chain with an increased block size and without SegWit, released on the 1st of August. This proposal does not require any minimum hashing power from the network and any nodes that accept the underlying condition of UAHF is able to interact with the network. UAHF is an alternative to Segwit as some stakeholders were not satisfied with the reduction of mining incentivisation and the separation of signatures from transaction data.
Because it is a hard fork, the new chain is not compatible with the older version. 

The UAHF occurred on the 1st of August 2017, and thus creating a new chain of Bitcoin. Bitcoin Cash was born.


## Bitcoin cash


### Double Spending

Just like the Ethereum hard fork **Bitcoin holders get the same amount of coins in Bitcoin Cash** only if they held their private keys at the time of the hard fork.

Bitcoin solved the issue of double spending and immutability in digital money thanks to its cutting edge technology. However, such events raise questions on how Bitcoin and blockchain tech can mitigate the aforementioned. 

To be clear, Bitcoin Cash is not double spending Bitcoin, as it is now a new and separate chain. Also, it is not money for free, because when the split occurred, both sides of the Bitcoin chain had the same value as the original chain. 

The market decided Bitcoin Cash would have its own price tag and therefore a tangible value. On the other hand, creating endless forks of Bitcoin would not result in the same price pattern as the market would most probably loose its credibility to Bitcoin's value proposition and select one main chain as the original one.


### Value

The moment miners invest their time, hardware and energy in generating new blocks, Bitcoin Cash has tangible value because miners are just capitalists investing their resources after all. 
Furthermore, wallets, exchanges and even payment gateways have integrated Bitcoin Cash - only days after the UAHF.


### Features

* Block size increased to 8 MB
* SegWit will not be implemented
* Replace-by-fee feature is removed
* Proof-of-Work difficulty adjustment is faster.



## A new fork?

After a successful split of the Bitcoin chain, there is still confusion on whether UASF BIP 148 will be adopted on the original chain. 

In May 2017, the Digital Currency Group - a blockchain trust - proposed a solution to the scaling debate by implementing two additional technical features to Bitcoin through a hard fork proposal called SegWit2x:
1 -  SegWit implementation through soft fork, with a mining consensus target of 80%.
2 -  Increase in block size from 1 MB to 2 MB, 6 months after SegWit activation. 


There are often misconceptions within the community, the Bitcoin Core project (community of developers behind Bitcoin) released a memo to tackled any misleading information. (add hyperlink source).

As such SegWit2x and SegWit soft fork are two different proposals which are currently clashing. 
* The former has been introduced by a conglomerate of capitalists, miners, businesses and investment funds.
* The latter has been introduced by Bitcoin core developers, an open community of developers that manage and monitor Satoshi Nakamoto's Bitcoin code repository.

Unfortunately, this created another uncertainty on whether Bitcoin will be struck by another chain split in November.
