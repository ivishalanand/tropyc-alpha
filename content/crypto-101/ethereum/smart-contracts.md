+++
title = "Smart Contracts"
date = 2017-08-02T17:16:29+02:00
description = "Smart contracts are Ethereum's main value proposition: we are now able to automate interactions, relationships, disbursements with computer programs."
weight = 30
draft = false
bref = "Ethereum, Chapter III"
toc = true
+++


## Differentiation



### Conventional contracts


Conventional contracts are agreements that define stakeholder relationships on a wide range of domains, would it be related to a transaction, inheritance or consumption. 

Typically, valid standard contracts are enforceable by the law, meaning if you decide not to honour the terms of the contract, a legal action can be taken upon you. 
However, you are not physically forced to honour the contract, there is definitely a trust factor to consider before entering a contractual relationship. Going legal on someone is at the end of the day, an inefficient and resource draining exercise that (most) people would like to avoid.
The current legal and judiciary system may resolve a litigation in a matter of years, sometimes decades in some jurisdiction.



### Smart contracts


Smart contracts try to solve this issue by automating the terms of a contract with a few lines of code. 
They are computer programs that execute pre-defined contractual conditions, at a certain point in time, to ensure an agreement is ultimately honoured. 
In other words, a smart contract is a programmed transaction protocol that runs a desired operation depending on hard coded scenarios.

It does not have to be a legal contract per se, rather, its aim is to minimise the risks of bad faith, make sure an agreement is honoured and automate tasks. 

Here’s a quick recap of the difference between both.

<div class="container my-4">
  <div class="row">
    <div class="col text-center">
      {{< img src="crypto-101/icons/handshake.svg" class="img-fluid" alt="handshake" >}}
      <p class="font-weight-bold mt-2 text-center">Formal or informal agreement</p>
      <p class="small text-center">If agreement is not honoured, the following can happen</p>
      <p class="small text-left">* Reminder</p>
      <p class="small text-left">* Follow – up</p>
      <p class="small text-left">* Renegotiation</p>
      <p class="small text-left">* Legal recourse</p>
      <p class="small text-left">* Settlement in the future</p>
    </div>
    <div class="col text-center">
      {{< img src="crypto-101/icons/smart-contract.svg" class="img-fluid" alt="smart-contract" >}}
      <p class="font-weight-bold mt-2 text-center">Smart contract, computer program</p>
      <p class="small text-left">Agreement is always honoured : a smart contract will automate the tasks as per initial terms and conditions.</p>
      <p class="small text-left">Smart contract are flexible, they can be permissionless and / or immutable</p>
    </div>
  </div>
 </div>
 
 
 
Ethereum allows developers to code smart contract on its platform thanks to its own programming language Solidity. 
Rather than “smart contracts” which is a term introduced in the 1990s, Ethereum refers them as “automated agents” in its white paper, because it enables the issuance of large scale computational operations between users and other smart contracts.





### Case study


This might be hard to conceptualise at first so let’s have a look at a real life smart contract adaptation:



#### Problem


Alice and Bob decide to bet a fraction of their savings on the occurrence of an event. 
Alice wins the bet If the S&P 500 reaches its lowest 10-year performance in the next month
15 days after, Bob loses. 



#### Conventional agreement


1. Alice and Bob enter an agreement (handshake, contract)
2. They decide that the loser will pay the winner after the event
3. Both track the S&P performance manually
4. Alice wins the bet

At this point, there are 3 possible outcomes :


<div class="container">
  <div class="row text-center">
    <div class="col">
     {{< img src="crypto-101/icons/yes.svg" class="img-fluid" alt="yes" >}}
     <p class="font-weight-bold">A. Bob pays up</p>
    </div>
    <div class="col">
     {{< img src="crypto-101/icons/three-dots.svg" class="img-fluid" alt="maybe" >}}
     <p class="font-weight-bold">B. Bob delays payment</p>
    </div>
    <div class="col">
     {{< img src="crypto-101/icons/no.svg" class="img-fluid" alt="no" >}}
     <p class="font-weight-bold">C. Bob refuses to pay out</p>
    </div>
  </div>
</div>
 
 
In a conventional agreement, we can, therefore, affirm that,

* Alice and Bob have to manually track the event
* Bob might breach the agreement
 
 
 
 
#### Smart contract
 
 
1. Alice and Bob create a smart contract that automates the terms of the agreement and tracks S&P performance
2. Both send the money to the smart contract that will release fund either at the end of the month or when S&P reaches the predefined metric
3. Alice wins the bet

Here, the smart contract releases the funds automatically to Alice.


Programming the bet on a smart contract offers two tangible benefits:

*    Alice and Bob does not need to track the S&P 500. A smart contract automates this task and rewards the winner accordingly. 
* They send the money to the smart contract, that disburses directly to the winner. It reduces any risk of bad faith in an agreement and avoids any disputes


Creating such interactions would typically require multiple smart contracts: 

* check S&P 500 performance,
* set the conditions of the bet (deadline, participants, etc..)
* hold the money and disburse to the winner based on the above.

Running each smart contracts on the network has a cost and it depends on the horse power required to execute it: this is when Ether transaction fees come in the picture.

The same way ERP and CRM automate supply chain and client communication, smart contracts can automate any real-life interaction.





### Ethereum Virtual Machine


Ethereum allows its users to set different kinds of operations: not just limited to monetary transactions like with Bitcoin.

At the epicentre of the Ethereum network sits the Ethereum Virtual Machine (EVM), the environment for smart contract development and execution. 

The EVM has two main characteristics 

* Turing complete: developers can create programs with more established and user-friendly coding languages such as Python or JavaScript.
* Isolated: code and smart contracts running on top of the EVM does not have access to other applications on the network.

Every node on the network (computers connected) runs the EVM and constantly updates the Ethereum database. This decentralised computation is actually far less efficient in terms of cost and speed than with a traditional hardware set-up. 


Still, it offers valuable benefits :

* constantly online with no downtime
* high-level of fault tolerance
* immutable and censorship resistant database

Ethereum and its EVM are value-agnostic: developers are the one deciding how to use the platform. While Bitcoin is suited for peer-to-peer payments, Ethereum can automate interactions between stakeholders and coordinate community actions on its network. 

Using code, we can now design any types of operations between peers like scheduling a payout to an investor, giving a voting right to an organisation’s decisions, or coordinating a peer-to-peer online marketplace.

Bitcoin changed the payment industry, Ethereum can very well change any industry where trust, immutability and security are important.
