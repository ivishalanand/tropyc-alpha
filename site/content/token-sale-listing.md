+++
title = "ICO / Token Sale Listing"
description = "Get your project listed on tropyc for free"
+++

<div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <form action="https://formspree.io/tokensale@tropyc.co" method="POST" class="border rounded p-4">
        <p> Listing on tropyc is free of cost. </p>
        <p> However, because we have a long queue of applications, it might take a matter of days before ICOs get published. </p>
        <p> You can go through our fast-track application to get published before others.</p>
        <h2 class="h3 text-center bg-primary p-2 text-white my-5">BASICS</h2>
        <div class="form-group">
          <label for="applicationType">Type of Application</label>
          <select name="applicationType" class="form-control" id="applicationType">
            <option>Regular - FREE</option>
            <option>Fast track 48h - 0.01 BTC</option>
            <option>1 week high visibility - 0.05 BTC</option>
          </select>
        </div>
        <div class="form-group">
          <label for="name">ICO Name</label>
          <input type="text" name="name" class="form-control form-control-sm" id="name" required>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="startDate">Start date</label>
              <input type="date" name="startDate" class="form-control form-control-sm" id="startDate" required>
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="endDate">End date</label>
              <input type="date" name="endDate" class="form-control form-control-sm" id="endDate" required>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="country">Origin</label>
          <input type="text" name="origin" class="form-control form-control-sm" id="country" aria-describedby="countryHelp">
          <small id="countryHelp" class="form-text text-muted">i.e. Singapore 2017, USA 2014</small>
        </div>
        <div class="form-group">
          <label for="blockchainTokenType">Blockchain and token type</label>
          <input type="text" name="blockchainTokenType" class="form-control form-control-sm" id="blockchainTokenType" aria-describedby="blockchainTokenTypeHelp">
          <small id="blockchainTokenTypeHelp" class="form-text text-muted">i.e. Native, Ethereum ERC20, NEO, Waves</small>
        </div>
        <div class="form-group">
          <label for="industry">Industry</label>
          <input type="text" name="industry" class="form-control form-control-sm" id="industry" aria-describedby="industryHelp">
          <small id="industryHelp" class="form-text text-muted">i.e. Asset managment, Attention economy, Software, Media</small>
        </div>
        <div class="form-group">
          <label for="oneLine">One liner</label>
          <textarea name="oneLine" class="form-control form-control-sm" id="oneLine" rows="1" placeholder="Describe your project up to 10 words"></textarea>
        </div>
        <div class="form-group">
          <label for="about">About</label>
          <textarea name="about" class="form-control form-control-sm" id="about" rows="6" placeholder="Tell us more about your project"></textarea>
        </div>
        <hr class="my-5">
        <h2 class="h3 text-center bg-primary p-2 text-white my-5">DISTRIBUTION</h2>
        <div class="form-group">
          <label for="ticker">Units Ticker</label>
          <input type="text" name="ticker" class="form-control form-control-sm" id="ticker">
          <small id="tickerHelp" class="form-text text-muted">i.e. BTC for Bitcoin, ETH for Ethereum, XXX for your ICO</small>
        </div>
        <div class="form-group">
          <label for="ticker">Accepted currencies</label>
          <input type="text" name="acceptedCurrency" class="form-control form-control-sm" id="acceptedCurrency">
          <small id="tickerHelp" class="form-text text-muted">i.e. BTC for Bitcoin, ETH for Ethereum, XXX for your ICO</small>
        </div>
        <fieldset class="form-group">
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" name="supplyType" id="supplyType" value="Varying total supply" checked>
              Varying total supply
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" name="supplyType" id="supplyType" value="Limited/fixed total supply">
              Limited/fixed total supply
            </label>
          </div>
        </fieldset>
        <div class="form-group">
          <label for="distribution">Distribution</label>
          <textarea name="distribution" class="form-control form-control-sm" id="distribution" rows="6" placeholder="Detail your unit distribution, i.e. &#10; - Pre-ICO = 10% &#10; - ICO = 80% &#10; - Founders = 10% &#10; - ..."></textarea>
        </div>
        <div class="form-group">
          <label for="hardCap">Hard cap of the sale</label>
          <input type="text" name="hardCap" class="form-control form-control-sm" id="hardCap" aria-describedby="hardCapHelp" placeholder="$20,000,000 or 60,000 ETH">
          <small id="hardCapHelp" class="form-text text-muted">Hardcap on the ICO, not on the token total supply. If no hard cap, type 0</small>
        </div>
        <div class="form-group">
          <label for="allocation">Fund allocation</label>
          <textarea name="allocation" class="form-control form-control-sm" id="allocation" rows="6" placeholder="How will you spend the funds?, i.e. &#10; - Product development = 50% &#10; - Marketing = 20% &#10; - HR = 10% &#10; - ..."></textarea>
        </div>
        <hr class="my-5">
        <h2 class="h3 text-center bg-primary p-2 text-white my-5">LINKS</h2>
        <div class="form-group">
          <label for="websiteUrl">Website URL</label>
          <input type="text" name="websiteUrl" class="form-control form-control-sm" id="websiteUrl" placeholder="https://website.com">
        </div>
        <div class="form-group">
          <label for="socialLinks">Social Media Links</label>
          <textarea name="socialLinks" class="form-control form-control-sm" id="socialLinks" rows="6" placeholder="URLs to Facebook, Twitter, Github, Telegram, Blog and more"></textarea>
        </div>
        <div class="form-group">
          <label for="email">Contact Email</label>
          <input type="email" name="_replyto" class="form-control form-control-sm" id="email" aria-describedby="emailHelp" required>
          <small id="emailHelp" class="form-text text-muted">We will contact you for further information</small>
        </div>
        <hr class="my-5">
        <fieldset class="form-group">
          <label for="collaboration">Do you want to collaborate with tropyc on social media?</label>
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" name="collaboration" id="collaboration" value="Yes">
              Yes
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" name="collaboration" id="collaboration" value="No">
              No
            </label>
          </div>
        </fieldset>
        <hr class="my-5">
        <input type="hidden" name="_subject" value="Token Sale Listing - New submission" />
        <button type="submit" class="btn btn-primary d-block mx-auto">Submit Application</button>
      </form>
    </div>
  </div>
</div>
