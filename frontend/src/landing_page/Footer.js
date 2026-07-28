import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="container-fluid p-5 border-top" style={{ backgroundColor: "lightgrey" }}>
      <div className="row p-5">
        <div className="col">
          <p><img src="media/images/logo.svg" width={"60%"} /></p>
          <p>© 2026, Zerodha Broking Ltd. <br />All rights reserved.</p>
          <div className="d-flex gap-3">
            <Link to={""} className="text-decoration-none"><i class="fa-brands fa-linkedin-in"></i></Link>
            <Link to={""} className="text-decoration-none"><i class="fa-brands fa-twitter"></i></Link>
            <Link to={""} className="text-decoration-none"><i class="fa-brands fa-instagram"></i></Link>
            <Link to={""} className="text-decoration-none"><i class="fa-brands fa-facebook"></i></Link>
          </div>
        </div>
        <div className="col d-flex flex-column gap-3">
          <h5>Account</h5>
          <Link to={""} className="text-decoration-none text-muted d-block">Open demat account</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Minor demat account</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">NRI demat account</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">HUF demat account</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Commodity</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Dematerialisation</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Fund transfer</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">MTF</Link>
        </div>
        <div className="col d-flex flex-column gap-3">
          <h5>Support</h5>
          <Link to={""} className="text-decoration-none text-muted d-block">Contact us</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Support portal</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">How to file a complaint?</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Status of your complaints</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Bulletin</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Circular</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Z-Connect blog</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Downloads</Link>
        </div>
        <div className="col d-flex flex-column gap-3">
          <h5>Company</h5>
          <Link to={""} className="text-decoration-none text-muted d-block">About</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Philosophy</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Press & media</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Careers</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Zerodha Cares (CSR)</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Zerodha.tech</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Open source</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Referral program</Link>
        </div>
        <div className="col d-flex flex-column gap-3">
          <h5>Quick links</h5>
          <Link to={""} className="text-decoration-none text-muted d-block">Upcoming IPOs</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Brokerage charges</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Market holidays</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Economic calendar</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Calculators</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Markets</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Sectors</Link>
          <Link to={""} className="text-decoration-none text-muted d-block">Gift Nifty</Link>
        </div>
        <p className="mt-5">Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF

          Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances

          Smart Online Dispute Resolution | Grievances Redressal Mechanism

          Investments in securities market are subject to market risks; read all the related documents carefully before investing.

          Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.

          India's largest broker based on networth as per NSE. NSE broker factsheet

          "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.

          *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.

          Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).</p>
        <div>
          <div className="d-flex gap-4 container px-4">
            <Link to={""} className="text-decoration-none text-muted">NSE </Link>
            <Link to={""} className="text-decoration-none text-muted">BSE</Link>
            <Link to={""} className="text-decoration-none text-muted">MCX</Link>
            <Link to={""} className="text-decoration-none text-muted">MSEI</Link>
            <Link to={""} className="text-decoration-none text-muted">Terms & conditions </Link>
            <Link to={""} className="text-decoration-none text-muted">Policies & procedures</Link>
            <Link to={""} className="text-decoration-none text-muted">Privacy policy </Link>
            <Link to={""} className="text-decoration-none text-muted">Disclosure</Link>
            <Link to={""} className="text-decoration-none text-muted">For investor's attention</Link>
            <Link to={""} className="text-decoration-none text-muted">Investor charter</Link>
            <Link to={""} className="text-decoration-none text-muted">Sitemap</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer