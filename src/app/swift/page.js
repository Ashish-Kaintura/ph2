import Script from 'next/script';

export default function YourPage() {
    return (
      <div>
        {/* Other content on your page */}
  
        <div id="home"></div>
  
        <Script
          src="https://www.swiftbook.io/plugin/js/booking-service.min.js"
          id="propInfo"
          propertyid="322MTLBmiYVgNQzaaMpAFk2Mzc="
          cal-rendererId="home"
          JDRN="Y"
          strategy="lazyOnload"
        />
      </div>
    );
  }
  