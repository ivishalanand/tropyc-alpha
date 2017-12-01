+++
title = "OriginTrail"
date = 2017-08-13T17:30:02+02:00
description = "OriginTrail enables seamless data sharing along any supply chain. Decentralized, blockchain-supported platform ensures trust, transparency and security. It helps companies exchange relevant data seamlessly and in a secure way to build accountability, protect their brands and save money."
bref = "First purpose built-protocol for supply chains based on blockchain"
weight = 20
draft = false

ticker = "TRAC"
startDate = 2018-01-15
endDate = 2018-02-12
rating = "8.7"
origin = "Slovenia, 2014"
industry = "Supply chain"
platform = "Ethereum"
currencyAccepted = "ETH"

[links]
  website = "https://origintrail.io/token-sale/"
  twitter = "origin_trail"
  facebook = "origintrail"
  reddit = "origintrail"
  telegram = "origintrail"
  medium = "origintrail"
  vimeo = "233912879"
  whitepaper = "https://origintrail.io/wp-content/uploads/2017/10/OriginTrail-White-Paper.pdf"

[valuation]
  [valuation.info]
    recap = "Based on hard cap."
  [valuation.headers]
    header = "USD"
  [valuation.rows]
    [valuation.rows.ico]
      distribution = "ICO"
      cut = "50%"
      supply = "250,000,000"
      value = "22,500,000"
    [valuation.rows.founders]
      distribution = "Founders & early investors"
      cut = "18%"
      supply = "90,000,000"
      value = "8,100,000"
    [valuation.rows.team]
      distribution = "Team"
      cut = "5%"
      supply = "25,000,000"
      value = "2,250,000"
    [valuation.rows.liquidity]
      distribution = "Liquidity"
      cut = "5%"
      supply = "25,000,000"
      value = "2,250,000"
    [valuation.rows.futureEmission]
      distribution = "Future development"
      cut = "20%"
      supply = "100,000,000"
      value = "9,000,000"
    [valuation.rows.bounties]
      distribution = "Bounties"
      cut = "2%"
      supply = "10,000,000"
      value = "900,000"
    [valuation.rows.total]
      distribution = "Total"
      cut = "100%"
      supply = "500,000,000"
      value = "45,000,000"

[allocation]
  [allocation.development]
    stake = "Development"
    cut = "50%"
  [allocation.marketing]
    stake = "Marketing"
    cut = "15%"
  [allocation.legal]
    stake = "Legal"
    cut = "6%"
  [allocation.businessDevelopment]
    stake = "Business Development"
    cut = "10%"
  [allocation.security]
    stake = "Security"
    cut = "10%"
  [allocation.administration]
    stake = "Administration"
    cut = "6%"
  [allocation.pr]
    stake = "PR and communication"
    cut = "3%"


[setUp]
  [setUp.compliance]
    investorVerification = true
    thirdPartyAudit = false
  [setUp.trading]
    exchangeListing = false
    walletSupport = true
  [setUp.token]
    type = "Secondary"
    functions = "Currency, Incentive"
    consensus = "Proof-of-stake"
    premined = false
  [setUp.market]
    similar = "N/A"
    competition = "Mid"
    entryBarrier = "Mid"
  [setUp.partnerships]
    mainstreamMedia = true
    corporatePartners = true
    smartMoneyInvestors = true
    cryptoInfluencers = true

[stage]
  website = true
  whitepaper = true
  initialCode = true
  mvp = true
  openDev = false
  beta = false
  workingProduct = false
  community = false
  expansion = false
  profit = false
+++


**Interoperability and data integrity**

OriginTrail enables seamless and automatic data connection and
interoperability between IT systems of different stakeholders in
multi-organisation supply chains with consensus mechanisms for
ensuring integrity of data.  

Interoperability is delivered by integrating globally recognised
GS1 standards for Master Data (descriptive attributes for
products), Transaction Data (related to business relations),
Visibility Data (related to tracing and tracking). Other data sets will
include IoT and compliance data.  

Consensus among entities in supply chain is achieved by
performing cross-reference checks every time a new data set is
added to the protocol. This ensures the entire supply chain is in
accords regarding a particular batch of products. If there is no
consensus, discrepancies can be quickly reported, investigated
and reconciled.  

The consensus check is performed in 3 steps:

1. Creating a chain of accountability by mutual approval of supply chain stakeholders

2. Matching of dynamic batch information is verified. Sensitive data is protected by a zk-SNARKs implementation

3. Auditing and compliance organizations confirm the
provided data

**System overview**

Once the automatic data input is setup by the service providers
(from supply chain ERPs, IoT devices, online and brick & mortar
retails stores, etc.) it is introduced to Data Creator (DC) nodes
which disseminate the data in the network to other Data Holder
(DH) nodes for safekeeping, fingerprinting, performing data
standardization checks, consensus checks and creating
connections with other already available supply chain data in the
system.  

Finally, supply chain data is read from the nodes by the
decentralized applications from the application layer. All the nodes
are reimbursed for these services by Trace tokens in the amounts
agreed upon with a bidding mechanism.
