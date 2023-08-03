(function (c) {
    if (isEngineInited()){
        return;
    }

    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = 1;
    script.src = c.managerUrl;
    script.dataset.roxotInited = 'true';

    let head = document.getElementsByTagName('head')[0];
    head.insertBefore(script, head.firstChild);

    window.rom = window.rom || {cmd: [], icmd: []};
    window.rom.icmd = window.rom.icmd || [];
    window.rom.icmd.push(c);

    function isEngineInited(){
        return  document.querySelectorAll('[data-roxot-inited]').length;
    }
})({"publisherId":"c427193e-c45c-4b31-b9de-0d5bc41115fd","publisher":"TechMedia","adBlockMode":"iframe","iframeSspList":["google","prebid","prebid_dfp"],"managerUrl":"https:\/\/cdn.skcrtxr.com\/wrapper\/js\/common-engine.js?v=s-1b0389bc-021a-4fa5-94d6-d329e6ffe7d5","wrapperUrl":"https:\/\/cdn.skcrtxr.com\/wrapper\/js\/wrapper.js?v=s-1b0389bc-021a-4fa5-94d6-d329e6ffe7d5","placementConfigTemplate":"https:\/\/cdn.skcrtxr.com\/wrapper-builder\/placement\/__PLACEMENT_ID__?v=d-1690979444","gfsPlacementOptionsTemplate":"https:\/\/cdn.skcrtxr.com\/wrapper-builder\/gfs-placement\/__PLACEMENT_ID__?v=d-1690979444","isLanguageSpecific":true,"hostConfig":{"habr.com":{"wrapperOptions":[],"isAcceptableAdsEnabled":false}},"isBrowserSpecific":false,"isOsSpecific":false,"isDeviceTypeSpecific":false,"isGeoSpecific":false,"isGetParamSpecific":true,"dynamicUrlTemplate":"","wrapperConfig":{"syncThemes":{"enabled":true,"method":"chat_v2"},"monetizationStatsIntegration":{"enabled":true,"requestSettings":{"isNeedToSend":true,"sampleCoefficient":1},"impressionSettings":{"isNeedToSend":true,"sampleCoefficient":1}},"host":"habr.com","engineFileName":"common-engine.js","enableAdFirstLoadInHiddenTab":true,"universalPlaceHolder":{"enabled":false},"prebid":{"prebidTimeout":1500,"adjustment":{"appnexus":0.95},"path":"https:\/\/cdn.skcrtxr.com\/wrapper\/js\/prebid.js?v=s-1b0389bc-021a-4fa5-94d6-d329e6ffe7d5"},"adfox":{"integrationTitle":"Adfox roxot-rsya","hb":{"timeout":1000,"biddersMap":{"betweenDigital":"1945468","myTarget":"1945461","otm":"1945469","segmento":"1945470","getintent":"1945477","hybrid":"1945478","adriver":"1945479","buzzoola":"1945480","relap":"1945481","adfox_yandex_premium-publisher-network":"1946302","videonow":"2191650","adfox_adsmart":"1998999","adfox_yandex_roxot-adfox-hb":"2043702"}}},"roxotYaMetric":{"enabled":true,"counterId":88477929},"syncCookies":{"enabled":true,"alwaysSyncBidders":["upravelBidder","mediaSniperBidder"]},"videojsLibs":{"path":"https:\/\/cdn.skcrtxr.com\/wrapper\/js\/video-libs.js?v=s-1b0389bc-021a-4fa5-94d6-d329e6ffe7d5"},"pageUrlVariableName":"roxotPlusPageUrl","stubVideoPath":"https:\/\/cdn.skcrtxr.com\/wrapper\/js\/video-ad?v=s-1b0389bc-021a-4fa5-94d6-d329e6ffe7d5","adfoxIntegrationType":"direct","yandexIntegrationType":"common","openRtbHost":"https:\/\/openrtb.skcrtxr.com"},"lazyLoading":[],"geoSpecificUrl":"https:\/\/geo-worker.skcrtxr.com\/api\/geo\/region","openRtbApiGetUserInfoUrl":"https:\/\/skcrtxr.com\/open-rtb-api\/get-user-bidders-info","syncCookiesUrl":"https:\/\/skcrtxr.com\/user-sync-api\/sync"})