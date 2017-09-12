+++
title = "Intro"
date = 2017-08-02T17:14:47+02:00
description = "Bitcoins are stored in digital wallets, learn the basics of cryptography and the different types of wallets you can use."
weight = 10
draft = false
bref = "Wallets, Chapter I"
toc = true
+++


## Definition



Cryptocurrency wallets let you receive, spend and monitor securely your assets on a software program by interacting with the blockchain. 
It is the single medium of interaction between the user and different cryptocurrency blockchains.

Technically speaking, no physical object or digital files “stores” Bitcoin or any cryptocurrencies: you cannot say “this computer, or this file has bitcoins”.

In fact, digital wallets store records of transactions between different public addresses. Cryptocurrencies do not exist, all that exists is the transaction history stored on the blockchain.

Behind the scenes, the sender proves to the network that he is the owner of a cryptocurrency wallet through cryptography. The sender needs to sign off a transaction, by providing both the blockchain public address (where the funds are stored) with its unique private key. After the network verifies the pair is correct, the transaction is recorded and the two public address balances are updated.



<div class="container my-4">
  <div class="row">
    <div class="col">
     {{< img src="crypto-101/infographics/info-wal1-1.png" class="img-fluid" alt="from-wallet-to-blockchain" >}}
    </div>
  </div>
   <div class="row text-center">
    <div class="col">
      <p class="small">Password and 2 Factor Authentitification protect the access to a wallet</p>
    </div>
    <div class="col">
      <p class="small">Wallet can generate several public and private key pairs. Each of these paris are unique</p>
    </div>
    <div class="col">
      <p class="small">Wallet sends the transaction to the network for confirmation</p>
    </div>
</div>



## Types of wallets



Now that we understand what wallets do and how they work, lets' review their categories 

There are three different types of wallets, all of which will give you a different level of control, security and user experience.

<div class="container my-4">
  <div class="row text-center">
    <div class="col">
     {{< img src="crypto-101/icons/wallet-online.svg" class="img-fluid" alt="wallet-online" >}}
     <p class="font-weight-bold mt-2">Online</p>
     <p class="small">Third party holds the digital currency. You hold a promise of payment back or IOU</p>
    </div>
    <div class="col">
     {{< img src="crypto-101/icons/wallet-hot.svg" class="img-fluid" alt="wallet-hot" >}}
     <p class="font-weight-bold mt-2">Hot</p>
     <p class="small">No middle man has access to your assets: coins are stored and held locally. However, they are vulnerable to a physical and digital attack</p>
    </div>
    <div class="col">
     {{< img src="crypto-101/icons/wallet-cold.svg" class="img-fluid" alt="wallet-cold" >}}
     <p class="font-weight-bold mt-2">Cold</p>
     <p class="small">Coins stored locally in a system that are never online. Still vulnerable to physical attack.</p>
    </div>
  </div>
</div>




### Online


When storing your coins on an online wallet, such as an exchange, you do not own them anymore. As such, you hold an IOU from the third party.

An IOU refers to “I owe you”: in the cryptocurrency world, either you have full control over your private keys, or you trust a third party to store them.

The former represents the technology breakthrough of the decentralized blockchain, the latter is similar to the current centralised fiat economy.

*WARNING!* You do not own crypto-assets stored on exchanges and online wallets, you only own a _promise_ that a third party will give you back your funds – nothing less, nothing more.




### Hot


Hot wallets owners have full ownership of their coins, without the necessity to trust any third parties with their crypto assets. The wealth is stored locally rather than on a middle man's system.

However, although hot wallets enjoy improved safety features, a hot wallet (desktop or mobile) is still vulnerable to hackers or virus attack because it is virtually always connected to the blockchain.




### Cold


Finally, cold wallets are considered as locally stored in an “offline” system called air-gapped. They are not constantly connected to the internet making them impossible to compromise remotely if the system has been correctly set up.

This level of security is achieved only when private keys are generated and stored in an offline environment.

You can either make your own DIY cold wallet or follow our hard wallet product reviews here.

</table>
<table class="table table-sm table-striped">
    <thead>
        <tr class="text-center font-weight-bold">
            <td> </td>
            <td>I OWE U</td>
            <td>HOT</td>
            <td>COLD</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Use</td>
            <td>Cash wallet</td>
            <td>Current account</td>
            <td>Saving account</td>
        </tr>
        <tr>
            <td>Risk</td>
            <td>Centralisation, hack, physical attack</td>
            <td>Hack and physical attack</td>
            <td>Physical attack</td>
        </tr>
        <tr>
            <td>Safety</td>
            <td>- - -</td>
            <td>+</td>
            <td>+ + +</td>
        </tr>
    </tbody>
</table>

