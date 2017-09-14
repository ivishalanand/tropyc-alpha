+++
title = "Best Practices"
date = 2017-08-02T17:15:06+02:00
description = "Bitcoins are stored in digital wallets, learn the basics of cryptography and the different types of wallets you can use."
draft = false
bref = "Wallets, Chapter II"
toc = true
+++


<blockquote>
<p>"In crypto, you're in control of your wealth, but this luxury comes with extra responsibilities."</p>
</blockquote>


## Set-up



We advise you to set up at least two wallets:

* one hot wallet for daily expense that should not hold a huge chunk of your capital,
* one cold wallet to store the rest of your crypto assets.

Always use your hot wallet when transacting with the outside. We advise making your cold wallet only interact with your own wallets for an extra layer of security.

Picture your hot wallet as your current account and cold wallet as your savings accounts




<div class="container my-4">
  <div class="row text-center">
    <div class="col">
     {{< img src="crypto-101/icons/wallet-cold.svg" class="img-fluid" alt="wallet-cold" >}}
     <p class="font-weight-bold mt-2">Cold wallet</p>
     <p class="small text">savings account</p>
    </div>
    <div class="col">
      {{< img src="crypto-101/icons/wallet-hot.svg" class="img-fluid" alt="wallet-hot" >}}
      <p class="font-weight-bold mt-2">Hot wallet</p>
      <p class="small text">current account</p>
    </div>
    <div class="col">
      {{< img src="crypto-101/icons/wallet-online.svg" class="img-fluid" alt="wallet-online" >}}
      <p class="font-weight-bold mt-2">Online wallet</p>
      <p class="small text">short term</p>
    </div>
  </div>
</div>






## Cryptography pair




A wallet can generate an unlimited amount of private key and public address combinations. However, a wallet (and it's password) does not need to be generated for every pair. Because the blockchain is transparent, make sure to never share a public address that has already been utilised with a third party.

It is important to generate new public addresses for every transaction, otherwise, the person you transact with will match the public address' balance with your identity.



{{< img src="crypto-101/infographics/info-wal2-1.png" class="img-fluid" alt="public-address-single-use" >}}


Since the blockchain tracks all transactions, sharing used public addresses for payment means sharing your account balance to a third party.





## Encryption



Setting up a wallet password is mandatory if you want to store your coins safely. The password should follow t:

* **length**: minimum of 12 characters
* **unique**: should not be reused for other wallet or any login
* **random**: no meaning and with all types of characters

A good idea for extra security is to use Multiple Factor Authentication, an additional layer of protection for your account. There are three different authentication factors:  _knowledge_, _possession_ and _inherence_. 
Under the 2-FA framework, you have to present to 2 components of authentication to access your account.
In most cases, a 2-FA encryption will work with a smartphone: you can access your wallet (or any encrypted account) only after entering successfully your password (knowledge) and insert a code generated from a mobile app.

WARNING SMS-based 2-FA is not considered secure.



{{< img src="crypto-101/infographics/info-wal2-2.png" class="img-fluid" alt="build-digital-vault" >}}





## Centralisation




Never store all your wealth in one wallet – hot or cold. It's best to avoid storing all your wealth in an account.
Similarly, you do not want to store your back up and password next to your wallet.


{{< img src="crypto-101/infographics/info-wal2-3.png" class="img-fluid" alt="wallet-like-bank-account" >}}


<div class="container my-4">
  <div class="row text-center">
    <div class="col">
     <p class="font-weight-bold mt-2">Exchange</p>
     <p class="small">Exhanges hold your private keys. Therefore you only hold an IOU</p>
    </div>
    <div class="col">
      <p class="font-weight-bold mt-2">Hot wallet</p>
      <p class="small">Hot wallets are at the epicentre of your transaction management system</p>
    </div>
    <div class="col">
      <p class="font-weight-bold mt-2">Cold wallet</p>
      <p class="small">Cold wallets only interacts with your own hot wallets</p>
   </div>
  </div>
</div>



## Back-up


<div class="container my-4">
  <div class="row">
    <div class="col col-sm-6 col-md-4 text-center">
     {{< img src="crypto-101/icons/back-up.svg" class="img-fluid" alt="saving-file" >}}
    </div>
    <div class="col col-sm-6 col-md-8 text-left">
      <p>In case your wallet gets deleted, corrupted, lost or mislaid, you will lose access to your to private keys. This means, you'll lose access to all your coins stored on your public addresses! </p>
      <p>Back up your wallet by making a copy of private key files in case something happens to your system and store it offline and somewhere safe.</p>
    </div>
  </div>
</div>





## Multisignature




<div class="container my-4">
  <div class="row">
    <div class="col col-sm-6 col-md-8 text-left">
     <p>Multi-sig addresses give the ability to share ownership of a public key between several users. 
     <p>In order to send coins out of the wallet, the transactions require all the keys of the involved users.
     <p>This feature can add an extra layer of protection if you want to share the wallet ownership without other parties. 
     Very suitable for a family and a business accounts.</p>
    </div>
    <div class="col col-sm-6 col-md-4 text-center">
      {{< img src="crypto-101/icons/multi-sig.svg" class="img-fluid" alt="multiple-private-keys" >}}
    </div>
  </div>
</div>

