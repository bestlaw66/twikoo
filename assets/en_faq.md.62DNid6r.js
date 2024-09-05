import{_ as i}from"./chunks/katex.B5umXGHV.js";import{_ as t,c as s,a3 as a,o as n}from"./chunks/framework.BxDYxQ52.js";const g=JSON.parse('{"title":"FAQ","description":"","frontmatter":{},"headers":[],"relativePath":"en/faq.md","filePath":"en/faq.md","lastUpdated":null}'),o={name:"en/faq.md"};function r(l,e,h,p,d,k){return n(),s("div",null,e[0]||(e[0]=[a(`<h1 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h1><h2 id="how-do-i-change-my-avatar" tabindex="-1">How do I change my avatar? <a class="header-anchor" href="#how-do-i-change-my-avatar" aria-label="Permalink to &quot;How do I change my avatar?&quot;">​</a></h2><p><a href="https://gravatar.com" target="_blank" rel="noreferrer">https://gravatar.com</a> Register and set your avatar by email and leave the same email when commenting.</p><p>Visitors can also comment by entering their digital QQ email address and using their QQ avatar.</p><h2 id="how-do-i-change-or-reset-the-administrator-password" tabindex="-1">How do I change or reset the administrator password? <a class="header-anchor" href="#how-do-i-change-or-reset-the-administrator-password" aria-label="Permalink to &quot;How do I change or reset the administrator password?&quot;">​</a></h2><p><a href="https://console.cloud.tencent.com/tcb/database/collection/config" target="_blank" rel="noreferrer">云开发控制台</a>Edit the configuration, delete the <code>config.ADMIN_PASS </code>configuration item, and then go to the Twikoo administration panel to reset the password.</p><h2 id="how-to-get-the-private-key-file-of-the-admin-panel" tabindex="-1">How to get the private key file of the admin panel? <a class="header-anchor" href="#how-to-get-the-private-key-file-of-the-admin-panel" aria-label="Permalink to &quot;How to get the private key file of the admin panel?&quot;">​</a></h2><ol><li><a href="https://console.cloud.tencent.com/tcb/env/login" target="_blank" rel="noreferrer">环境-登录授权</a>Click &quot;Private Key Download&quot; on the right of &quot;Custom Login&quot; to download the private key file</li><li>Open the private key file with a text editor and copy all the contents</li><li>Click the &quot;pinion&quot; (settings) icon in the comment window, paste the contents of the private key file, and set the administrator password</li></ol><h2 id="how-to-turn-on-article-visit-statistics" tabindex="-1">How to turn on article visit statistics? <a class="header-anchor" href="#how-to-turn-on-article-visit-statistics" aria-label="Permalink to &quot;How to turn on article visit statistics?&quot;">​</a></h2><p>You can add where you need to show the number of article visits：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;twikoo_visitors&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;0&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>to display the number of visits. We do not support site-wide visit statistics at the moment.</p><h2 id="how-can-i-test-if-the-akismet-anti-spam-configuration-is-in-effect" tabindex="-1">How can I test if the Akismet anti-spam configuration is in effect? <a class="header-anchor" href="#how-can-i-test-if-the-akismet-anti-spam-configuration-is-in-effect" aria-label="Permalink to &quot;How can I test if the Akismet anti-spam configuration is in effect?&quot;">​</a></h2><p>Please fill in <code>viagra-test-123</code> as a nickname, or <code>akismet-guaranteed-spam@example.com</code> as an email address to post a comment, which will definitely be considered as a spam comment.</p><p>Note that due to the slow response time of the Akismet service (about 6 seconds), which affects the user experience, Twikoo adopts a &quot;release first, detect later&quot; policy, and spam comments will be visible for a short time after they are posted.</p><h2 id="how-are-free-resources-calculated" tabindex="-1">How are free resources calculated? <a class="header-anchor" href="#how-are-free-resources-calculated" aria-label="Permalink to &quot;How are free resources calculated?&quot;">​</a></h2><p><a href="https://console.cloud.tencent.com/tcb/env/overview" target="_blank" rel="noreferrer">环境总览</a>See resource usage. twikoo consumes <strong>database</strong> and <strong>cloud functions</strong>, both with a free usage of -</p><ul><li>Database: 50,000 reads/day, 50,000 writes/day</li><li>Cloud functions: 40,000 GBs/month</li></ul><p>The memory consumption of Twikoo cloud functions is constant at 0.1GB, which means that Twikoo cloud functions have a running time of up to 400,000 seconds per month, and the bottleneck of free resources is mainly in the daily read limit of the database. It is recommended that webmasters pay attention to the usage of free resources.</p><h2 id="how-do-i-enable-katex-support" tabindex="-1">How do I enable Katex support? <a class="header-anchor" href="#how-do-i-enable-katex-support" aria-label="Permalink to &quot;How do I enable Katex support?&quot;">​</a></h2><p>Twikoo supports Katex formulas, but to limit the package size of Twikoo, Twikoo does not have the full Katex built-in, you need to <a href="https://katex.org/docs/browser.html" target="_blank" rel="noreferrer">load katex.js additionally in the page</a>.</p><p>example</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stylesheet&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> integrity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> crossorigin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;anonymous&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> integrity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> crossorigin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;anonymous&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> integrity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> crossorigin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;anonymous&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>After loading, you can send <code>$$c = \\pm\\sqrt{a^2 + b^2}$$</code> to test the effect.</p><p><img src="`+i+`" alt="katex"></p><p>You can also pass in a custom katex configuration during <code>twikoo.init</code>, see <a href="https://katex.org/docs/autorender.html" target="_blank" rel="noreferrer">Katex Auto-render Extension</a> for details.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">twikoo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  envId: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Environment id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  el: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#tcomment&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  katex: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    delimiters: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { left: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;$$&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, right: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;$$&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, display: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { left: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;$&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, right: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;$&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, display: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { left: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, right: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, display: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { left: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, right: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, display: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    throwOnError: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="how-to-configure-anti-spam" tabindex="-1">How to configure anti-spam? <a class="header-anchor" href="#how-to-configure-anti-spam" aria-label="Permalink to &quot;How to configure anti-spam?&quot;">​</a></h2><h3 id="using-tencent-cloud-content-security-service" tabindex="-1">Using Tencent Cloud Content Security Service <a class="header-anchor" href="#using-tencent-cloud-content-security-service" aria-label="Permalink to &quot;Using Tencent Cloud Content Security Service&quot;">​</a></h3><p>Twikoo supports access to Tencent Cloud Text Content Detection, which uses deep learning technology to identify harmful content involving pornography, politics, terrorism, etc. It also supports user-configurable thesaurus to combat customized offending text.</p><p>Tencent Cloud text content detection is a paid service, offering a 1-month free trial, after which the price is 25 RMB per 10,000 entries. If you don&#39;t have high requirements for anti-spam comments, you can also use the free Akismet.</p><p>How to apply for Tencent Cloud Text Content Inspection?</p><ol><li>Visit <a href="https://console.cloud.tencent.com/cms/text/overview" target="_blank" rel="noreferrer">Tencent Cloud Console - Text Content Security</a> to open the text content security service</li><li>Visit <a href="https://console.cloud.tencent.com/cam" target="_blank" rel="noreferrer">Tencent Cloud Console - User List</a>, click New User, and click Quick Create.</li><li>Enter the user name, select &quot;Programmatic Access&quot; as the access method, cancel &quot;AdministratorAccess&quot; as the user privilege, and only check the box &quot;QcloudTMSFullAccess&quot;. QcloudTMSFullAccess&quot;.</li><li>Click &quot;Create User&quot;. 5.</li><li>Copy the &quot;SecretId&quot; and &quot;SecretKey&quot; from the &quot;Successful New User&quot; page to the Twikoo administration panel Configure them in the &quot;Anti-Spam&quot; module</li><li>Test the anti-spam effect</li></ol><p>After success, webmasters can configure custom text content filtering in <a href="https://console.cloud.tencent.com/cms/text/lib" target="_blank" rel="noreferrer">Tencent Cloud Console - Custom Library Management</a>.</p><h3 id="using-akismet-anti-spam-service" tabindex="-1">Using Akismet Anti-Spam Service <a class="header-anchor" href="#using-akismet-anti-spam-service" aria-label="Permalink to &quot;Using Akismet Anti-Spam Service&quot;">​</a></h3><p>Akismet (Automattic Kismet) is a widely used spam filtering system by Matt Mullenweg, the founder of WordPress, Akismet is also the default plugin installed in WordPress and is very widely used. The goal of the design is to help blog sites to filter spam messages.</p><ol><li>Register <a href="https://akismet.com" target="_blank" rel="noreferrer">akismet.com</a></li><li>Select Akismet Personal subscription, copy the Akismet API Key and configure it in the Twikoo admin panel &quot;Anti-Spam&quot; module</li></ol><h2 id="error-encountered-in-login-administration-panel-auth-invalid-custom-login-ticket" tabindex="-1">Error encountered in login administration panel AUTH_INVALID_CUSTOM_LOGIN_TICKET <a class="header-anchor" href="#error-encountered-in-login-administration-panel-auth-invalid-custom-login-ticket" aria-label="Permalink to &quot;Error encountered in login administration panel AUTH_INVALID_CUSTOM_LOGIN_TICKET&quot;">​</a></h2><p>Generally, after configuring the login private key, the login private key is downloaded again, which causes the previously configured login private key to be invalid.<br> Solution: Go to <a href="https://console.cloud.tencent.com/tcb/database/collection/config" target="_blank" rel="noreferrer">Cloud Development Console</a>, database, delete the config, and then reconfigure the private key.</p><h2 id="can-t-receive-emails" tabindex="-1">Can&#39;t receive emails? <a class="header-anchor" href="#can-t-receive-emails" aria-label="Permalink to &quot;Can&#39;t receive emails?&quot;">​</a></h2><p>If it is a cloud function deployed by Vercel, please configure foreign mail service providers to avoid being judged as spam behavior by mail service providers. If it is other reasons, please go to Twikoo management panel, find mail test function, enter your personal mailbox and troubleshoot the reasons according to the test results.</p><p>In order to avoid performance problems caused by frequent mailbox checking, the mail configuration has a cache of about 10 minutes, if you are sure the configuration is fine but the test fails, you can wait for 10 minutes and then test again.</p><h2 id="vercel-can-t-upload-images" tabindex="-1">Vercel can&#39;t upload images? <a class="header-anchor" href="#vercel-can-t-upload-images" aria-label="Permalink to &quot;Vercel can&#39;t upload images?&quot;">​</a></h2><p>The Tencent Cloud environment comes with cloud storage, so you can upload images directly in the Tencent Cloud environment, and the images are saved in the cloud storage. However, Vercel environment does not, the upload image function relies on third party image bed, please configure the image bed in the admin panel, Twikoo supports the following image bed:</p><table tabindex="0"><thead><tr><th>Bed</th><th>Address</th><th>Features</th></tr></thead><tbody><tr><td>qcloud</td><td>None</td><td>Tencent Cloud environment comes with it, can be viewed in Cloud Development - Cloud Storage</td></tr><tr><td>7bu</td><td><a href="https://7bu.top" target="_blank" rel="noreferrer">https://7bu.top</a></td><td>Go to No Bed, powered by 杜老师, no free packages</td></tr><tr><td>smms</td><td><a href="https://sm.ms" target="_blank" rel="noreferrer">https://sm.ms</a></td><td>SMMS image bed, there is a free package, please register your account, <code>IMAGE_CDN_TOKEN</code> can be obtained in <a href="https://sm.ms/home/apitoken" target="_blank" rel="noreferrer">Dashboard</a></td></tr><tr><td><a href="https://www.lsky.pro" target="_blank" rel="noreferrer">lsky-pro</a></td><td>Private Deployment</td><td>LankenGraphics 2.0 version, <code>IMAGE_CDN</code> please configure the URL address of the home page of the graph bed (such as <code>https://7bu.top</code>), <code>IMAGE_CDN_TOKEN</code> get way please refer to the tutorial <a href="https://dusays.com/454/" target="_blank" rel="noreferrer">杜老师 said the graph bed: new version Go not to the bed Token acquisition and emptying</a>, the format of the obtained token should be <code>1|1bJbwlqBfnggmOMEZqXT5XusaIwqiZjCDs7r1Ob5</code>)</td></tr></tbody></table><h2 id="can-it-be-deployed-privately" tabindex="-1">Can it be deployed privately? <a class="header-anchor" href="#can-it-be-deployed-privately" aria-label="Permalink to &quot;Can it be deployed privately?&quot;">​</a></h2><p>Yes.</p>`,47)]))}const E=t(o,[["render",r]]);export{g as __pageData,E as default};
