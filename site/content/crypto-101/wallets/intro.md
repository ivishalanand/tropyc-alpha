+++
title = "Intro"
date = 2017-08-02T17:14:47+02:00
description = "Bitcoins are stored in digital wallets, learn the basics of cryptography and the different types of wallets you can use."
draft = false
bref = "Wallets, Chapter I"
toc = true
+++

## Definition

Cryptocurrency wallets let you receive, spend and monitor your assets securely on a software program by interacting with the blockchain. 
It is the single medium of interaction between the user and different cryptocurrency blockchains.

In fact, digital wallets store _records of transactions_ between various public addresses. All that exists is the transaction history recorded on the blockchain.

Behind the scenes, the sender proves to the network that he is the owner of a cryptocurrency account through cryptography.  
The sender needs to sign off a transaction, by providing both the blockchain public address (where the funds are stored) and the associated unique private key. 

After the network verifies the pair is correct, the transaction is recorded, and the two public address balances are updated.

Technically speaking, no physical object or digital file “stores” Bitcoin or any cryptocurrencies.

* You cannot say “this computer or this file has bitcoins”.
* But you can say "this computer or this file stores a private key that gives me access to Bitcoins."

<div class="container my-4">
  {{< img src="crypto-101/infographics/info-wal1-1.png" class="img-fluid" alt="From wallet to blockchain" >}}
  <div class="row text-center">
    <div class="col">
      <p class="small">Password and 2 Factor Authentication protect the access to a wallet</p>
    </div>
    <div class="col">
      <p class="small">Wallet can generate several public and private key pairs. Each of these pairs are unique</p>
    </div>
    <div class="col">
      <p class="small">Wallet sends the transaction to the network for confirmation</p>
    </div>
  </div>
</div>

## Types of wallets

Now that we understand what wallets do and how they work, let's review their categories:

There are three different types of wallets, all of which will give you a different level of control, security and user experience.

<div class="container my-4 align-items-center">
  <div class="row text-center">
    <div class="col">
      {{< img src="crypto-101/icons/wallet-online.svg" class="img-fluid" alt="Online wallet" >}}
      <p class="font-weight-bold mt-2">Online</p>
      <p class="small">Third party holds private keys</p>
      <p class="small">You hold a promise of payment when requested, or IOU</p>
    </div>
    <div class="col">
      {{< img src="crypto-101/icons/wallet-hot.svg" class="img-fluid" alt="Hot wallet" >}}
      <p class="font-weight-bold mt-2">Hot</p>
      <p class="small">Private keys are stored locally.</p>
      <p class="small">You're in control, but vulnerable to physical and online attacks</p>
    </div>
    <div class="col">
      {{< img src="crypto-101/icons/wallet-cold.svg" class="img-fluid" alt="Cold wallet" >}}
      <p class="font-weight-bold mt-2">Cold</p>
      <p class="small">Keys are stored in an offline environment</p>
      <p class="small">Safe from online threats, still vulnerable to physical attacks.</p>
    </div>
  </div>
</div>

### Online

When storing your cryptocurrencies on an online wallet, such as an exchange, you do not own them per se. As such, you hold an IOU from the third party.

An IOU refers to “I owe you”: in the cryptocurrency world, either you have full control over your private keys, or you trust a third party to store them.

Bitcoin is a technology breakthrough because it allows users to hold wealth by restricting the access to their private keys, without the need of an intermediary.  

Trusting a third party in cryptocurrency is similar to the current centralised fiat economy.

**WARNING!** You do not own crypto-assets stored on exchanges and online wallets, you only own a promise that a third party will give you back your funds – nothing less, nothing more.

### Hot

Hot wallet owners have full ownership over their digital money, as they do not require to trust any third parties. As such, private keys are stored locally rather than on a middleman's system.

However, although hot wallets enjoy improved safety features, a hot wallet (desktop or mobile) is still vulnerable to hackers and viruses because they are connected to the internet.  
An attacker can still take hold of your private keys if you haven't secured them well on your device.

### Cold

Finally, cold wallets store cryptocurrencies and assets in an “offline” system also known as "air-gapped". They are never connected to the web making it impossible to compromise remotely if the system has been correctly setup.

This level of security is possible only when private keys are generated **and** stored in an offline environment.

You can either make your DIY cold wallet or follow our hard wallet product reviews [here](../cold-wallets "Cold Wallets").

<table class="table table-sm table-striped my-4">
  <thead>
    <tr class="text-center font-weight-bold">
      <th> </th>
      <th>I OWE U</th>
      <th>HOT</th>
      <th>COLD</th>
    </tr>
  </thead>
  <tbody>
    <tr class="text-center">
      <td>Use</td>
      <td>Cash wallet</td>
      <td>Current account</td>
      <td>Saving account</td>
    </tr>
    <tr class="text-center">
      <td>Risk</td>
      <td>Centralisation, hack, physical attack</td>
      <td>Hack and physical attack</td>
      <td>Physical attack</td>
    </tr>
    <tr class="text-center">
      <td>Safety</td>
      <td>- - -</td>
      <td>+</td>
      <td>+ + +</td>
    </tr>
  </tbody>
</table>
