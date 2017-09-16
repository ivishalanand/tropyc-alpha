+++
title = "Under The Hood"
date = 2017-08-02T17:00:00+02:00
description = "Bitcoin offers a secure environment for transaction thanks to blockchain technology, here, you'll learn how the system works and what's under the hood."
draft = false
bref = "Bitcoin, Chapter III"
toc = true
+++



<div class="container my-4">
  <div class="row text-center">
    <div class="col">
      {{< img src="crypto-101/icons/mining.svg" class="img-fluid" alt="mining" >}}
      <p class="font-weight-bold">Mining</p>
    </div>
    <div class="col">
       {{< img src="crypto-101/icons/blockchain.svg" class="img-fluid" alt="blockchain" >}}
       <p class="font-weight-bold">Blockchain</p>
    </div>
    <div class="col">
       {{< img src="crypto-101/icons/consensus.svg" class="img-fluid" alt="consensus" >}}
       <p class="font-weight-bold">Consensus</p>
    </div>
  </div>
</div>



## Mining



The main difference between fiat and Bitcoin is that the former can be printed without a limit while the latter is capped at 21 million.








<div class="container my-4">
  <div class="row">
    <div class="col text-center">
      {{< img src="crypto-101/icons/fiat-economy.svg" class="img-fluid" alt="printer-usd-dollars" >}}
    </div>
    <div class="col text-left">
    <h3>Printing fiat</h3>
      In the current financial system, floating currencies are regulated by central banks – they can inject or remove money via a centralised system. The amount of fiat money is uncapped as Central Banks have the power to print an unlimited supply.
    </div>
  </div>
 </div>
 







<div class="container my-4">
  <div class="row">
    <div class="col text-left">
    <h3>Mining Bitcoin</h3>
     The creation of Bitcoin is decentralised, transparent and follows an immutable mathematical formula
      Bitcoins are not printed but "mined" by computers plugged on the network.
      There will only be 21 million bitcoins ever mined.
    </div>
    <div class="col text-center">
       {{< img src="crypto-101/icons/mining.svg" class="img-fluid" alt="mining" >}}
    </div>
  </div>
 </div>
 
 
Cryptocurrencies were once priced based on the prerequisites costs to run the network or mining costs.
As such, mining Bitcoin and cryptocurrencies is a resource-draining activity that requires investment from the fiat economy.



<div class="container my-4">
  <div class="row text-center">
    <div class="col">
       {{< img src="crypto-101/icons/hardware.svg" class="img-fluid" alt="servers" >}}
       <p class="font-weight-bold">Hardware</p>
       <p class="small">Miners allocate their computer horse power to the network. </p>
       <p class="small">The more powerful the installation, the better the performance.</p>
    </div>
    <div class="col">
       {{< img src="crypto-101/icons/energy.svg" class="img-fluid" alt="thunder" >}}
       <p class="font-weight-bold">Energy</p>
       <p class="small">Computer equipment consumes power to function continuously.</p>
       <p class="small">Energy is the main operational expense miners incur.</p>
    </div>
    <div class="col">
       {{< img src="crypto-101/icons/time.svg" class="img-fluid" alt="sandbox" >}}
       <p class="font-weight-bold">Time</p>
       <p class="small">Resources could be allocated to another network.</p> 
       <p class="small">Miners invest not only their equipment but their time to the task.</p>
    </div>
  </div>
</div>




<p class="font-weight-bold text-center mt-4">The network rewards miners in such a way, that they are incentivised to keep it secure.</p>




<div class="container my-4">
  <div class="row text-center">
    <div class="col">
      {{< img src="crypto-101/icons/transaction-fees.svg" class="img-fluid" alt="percentage-price" >}}
      <p class="font-weight-bold">Transaction fees</p>
      <p class="small">Issuing a transaction incurs a small fee,</p>
      <p class="small">this is disbursed to miners.</p>
    </div>
    <div class="col">
       {{< img src="crypto-101/icons/mining-rewards.svg" class="img-fluid" alt="gold-cup" >}}
       <p class="font-weight-bold">Mining rewards</p>
       <p class="small">New blocks generates new bitcoins, </p>
       <p class="small">rewarded to the best miners</p>
    </div>
  </div>
</div>





## Blockchain



A blockchain is a publicly available and distributed digital ledger that stores Bitcoin, cryptocurrency and token data and transaction information. 



The Bitcoin blockchain is a series of blocks that holds transaction data of approximately 10 minutes of network activity.
Miners are the ones creating new blocks by solving a mathematical formula. 
By doing so, the network rewards them with freshly mined Bitcoin 



{{< img src="crypto-101/infographics/info-btc3-1.png" class="img-fluid" alt="password-lock" >}} 



Each block records the information of multiple transactions including

* the time,
* all transactions,
* the sender's public address,
* the recipient's public address,
* the amount
* the mining reward
* a unique id code called hash.



  
<p class="font-weight-bold text-center mt-4">This offers two tangible benefits to blockchain technology compared to a centralised dataset:</p>
 
 
 
<div class="container my-4">
  <div class="row text-center">
    <div class="col">
     {{< img src="crypto-101/icons/transparent.svg" class="img-fluid" alt="magnifying-glass-gold" >}}
     <p class="font-weight-bold">Transparency</p>
     <p class="small">Perfect knowledge of transaction information.</p>
    </div>
    <div class="col">
     {{< img src="crypto-101/icons/lock.svg" class="img-fluid" alt="lock-inside-chat-bubble" >}}
     <p class="font-weight-bold">Immutable</p>
     <p class="small">Once a block is recorded it becomes permanent.</p>
    </div>
  </div>
</div>
  


Every Bitcoin transactions ever created and confirmed by the network are stored in a single block - depending on the transaction time. 
Every block is added on an immutable public distributed ledger, this is the blockchain: a chronological combination of data blocks.





## Consensus



A transaction does not exist until it is generated in a new block. In order to keep the network safe and secure, miners reach a consensus.



<div class="container my-4 text-center">
  <div class="row">
    <div class="col">
      {{< img src="crypto-101/icons/signature.svg" class="img-fluid" alt="pen-signature-document" >}}
      <p class="font-weight-bold">Sign</p>
      <p class="small">Alice wants to send money to Bob,</p>
      <p class="small">via Bitcoin or crypto.</p>
    </div>
    <div class="col">
      {{< img src="crypto-101/icons/generate.svg" class="img-fluid" alt="production-line" >}}
      <p class="font-weight-bold">Generate</p>
      <p class="small">Miners gather data and</p>
      <p class="small">create their own block.</p>
    </div>
    <div class="col">
      {{< img src="crypto-101/icons/compete.svg" class="img-fluid" alt="boxing-gloves" >}}
      <p class="font-weight-bold">Verify</p>
      <p class="small">All miners compete to get their block</p>
      <p class="small">approved and issued on the blockchain.</p>
    </div>
  </div>
</div>





<div class="container my-4">
  <div class="row align-items-center">
    <div class="col-sm-6 col-md-4 text-center">
     {{< img src="crypto-101/icons/signature.svg" class="img-fluid" alt="pen-signature-document" >}}
    </div>
    <div class="col-sm-6 col-md-8 text-left"> 
    <h3>Sign</h3>
     <p>1 - Alice issues a transaction from her wallet.</p>
     <p>2 - She sets the recipient's public address and the amount.</p>
     <p>3 - The public address requires the corresponding private key to be accepted.</p>
     <p>4 - Alice signs the transaction with her private key that can be locked by a password.</p>
     <p>5 - The transaction is the sent online to the bitcoin network and blockchain (via wallets).</p>
    </div>
  </div>
</div>








<div class="container my-4">
  <div class="row align-items-center">
    <div class="col-sm-6 col-md-4 text-center">
    <h3>Generate</h3>
    <p>Miners then create a new block from signed transaction and verify they are valid.</p>
    <p>The block's data is then converted into a hash by miners.</p>
    <p >A hash is a fixed-length string that holds large amounts of data.</p>
    <p>Each block has a unique hash because it has a unique set of data. Changing one variable in the data will change the hash.</p>
    <p>This way, the network knows if a fake transaction was inserted in a previous block because each block's hash is part of the formula that generates a new block.</p>
    </div>
    <div class="col-sm-6 col-md-8 text-left">
   {{< img src="crypto-101/icons/generate.svg" class="img-fluid" alt="production-line" >}}
    </div>
  </div>
</div>








<div class="container my-4">
  <div class="row align-items-center">
    <div class="col-sm-6 col-md-4 text-left">
    {{< img src="crypto-101/icons/compete.svg" class="img-fluid" alt="boxing-gloves" >}}
    </div>
    <div class="col-sm-6 col-md-8 text-center">
    <h3>Compete</h3>
    <p>Once miners have a valid block and hash, they compete amongst each other to get their block added to the blockchain by solving a mathematical formula that involves hashing.</p>
   <p>Miners need to gather different unconfirmed transactions (input) compute them into a hashing function set by the network and create a new hash (output) with pre-determined conditions (starts with a certain amount of zeros).</p>
    </div>
  </div>
</div>


The network sets a tougher hash solution as more miners compete, this way blocks are generated in a similar fashion, and not all bitcoins are mined simultaneously.  
Under the hood, the network sets every 2 weeks a hash target value: miners need to solve the problem by providing a valid hash inferior to the target.  
Retargeting makes hashing difficulty evolve with the number miners connected to the network.
 
 


## Methodology




The method of incentivising resource-consuming activities in order to reach a network consensus is called Proof-Of-Work.

This ensures

* Bitcoin emission rate is transparent.
* Creation of blocks occurs approximately every 10 minutes.
* Miners are incentivised to secure the network.
* Digital assets are secured on a distributed and public network.



<p class="mt-3">Here's a recap of the process: from initiating a transaction to getting it mined on the blockchain.</p>


<div class="container my-4">
  <div class="row text-center font-weight-bold">
    <div class="col">
     1 - Signature
    </div>
    <div class="col">
     2 - Mining
    </div>
    <div class="col">
     3 - Compete
    </div>
    <div class="col">
     4 - Blockchain
    </div>
  </div>
</div>
  
  <p class="my-4 text-center">{{< img src="crypto-101/infographics/info-btc3-2.png" class="img-fluid" alt="from-signature-to-blockchain" >}}</p>
  
<div class="container my-4">
  <div class="row text-center small">
    <div class="col">
     Transaction is signed and sent to the network by a wallet
    </div>
    <div class="col">
      Unconfirmed transaction wait to be added in the next block by miners
    </div>
    <div class="col">
      Miners verify authenticity of transaction by solving proof-of-work problem
    </div>
    <div class="col">
      Blocks get verified and added to the original bitcoin blockchain
    </div>
  </div>
</div>

Miners are tasked with solving a mathematical problem before getting rewarded by the network. If it takes more resources to solve a problem than to verify it, this is called Proof-of-Work.
Because the number of miners plugged on the Bitcoin network constantly varies, the mining difficulty adjusts itself to the network.

Every 2016 blocks, the mining difficulty changes so that the previous 2016 blocks mined would be mined in exactly two weeks from then. On average, 2016 blocks in two weeks represents one block every 10 minutes.

1. If more miners join the network, then the time to mine one single block reduces.
2. If blocks are getting mined faster, then the mining difficulty will have to increase.
3. When mining difficulty increased, then miners need more time to solve the Proof-Of-Work problem
4. The time to mine one single block increases.

The Bitcoin network automatically adjusts its difficulty to the network, in order to keep mining one block every 10 minutes.
