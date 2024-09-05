import{_ as a,c as o,a3 as t,o as i}from"./chunks/framework.BxDYxQ52.js";const p=JSON.parse('{"title":"版本更新","description":"","frontmatter":{},"headers":[],"relativePath":"update.md","filePath":"update.md","lastUpdated":null}'),l={name:"update.md"};function r(c,e,d,s,n,h){return i(),o("div",null,e[0]||(e[0]=[t('<h1 id="版本更新" tabindex="-1">版本更新 <a class="header-anchor" href="#版本更新" aria-label="Permalink to &quot;版本更新&quot;">​</a></h1><p>不同部署方式的更新方式也不同，请对号入座。更新部署成功后，请不要忘记同时更新前端的 Twikoo CDN 地址中的 <code>x.x.x</code> 数字版本号，使之与云函数版本号相同，然后部署网站。</p><h2 id="针对腾讯云一键部署的更新方式" tabindex="-1">针对腾讯云一键部署的更新方式 <a class="header-anchor" href="#针对腾讯云一键部署的更新方式" aria-label="Permalink to &quot;针对腾讯云一键部署的更新方式&quot;">​</a></h2><p>登录<a href="https://console.cloud.tencent.com/tcb/apps/index" target="_blank" rel="noreferrer">环境-我的应用</a>，输入</p><ul><li>来源地址：<code>https://github.com/twikoojs/twikoo/tree/main</code></li><li>部署分支：<code>main</code></li></ul><p>应用目录无需填写，点击“确定”，部署完成。</p><h2 id="针对腾讯云手动部署的更新方式" tabindex="-1">针对腾讯云手动部署的更新方式 <a class="header-anchor" href="#针对腾讯云手动部署的更新方式" aria-label="Permalink to &quot;针对腾讯云手动部署的更新方式&quot;">​</a></h2><p>登录<a href="https://console.cloud.tencent.com/tcb/scf/index" target="_blank" rel="noreferrer">环境-云函数</a>，点击 twikoo，点击函数代码，打开 <code>package.json</code> 文件，将 <code>&quot;twikoo-func&quot;: &quot;x.x.x&quot;</code> 其中的版本号修改为最新版本号，点击“保存并安装依赖”即可。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>如果您的云函数是 1.0.0 之前的版本，因为 1.0.0 版本修改了部署步骤，请先参考<a href="#手动部署">手动部署</a>，从第 5 步开始，重新创建云函数，再按照此步骤更新。</p><p>如果升级后出现无法读取评论列表，云函数报错，请在函数编辑页面，删除 <code>node_modules</code> 目录（删除需要半分钟左右，请耐心等待删除完成），再点击保存并安装依赖。如果仍然不能解决，请删除并重新创建 Twikoo 云函数。</p></div><h2 id="针对腾讯云命令行部署的更新方式" tabindex="-1">针对腾讯云命令行部署的更新方式 <a class="header-anchor" href="#针对腾讯云命令行部署的更新方式" aria-label="Permalink to &quot;针对腾讯云命令行部署的更新方式&quot;">​</a></h2><p>进入 Twikoo 源码目录，执行以下命令更新现有的云函数</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deploy</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 您的环境id</span></span></code></pre></div><h2 id="针对-vercel-部署的更新方式" tabindex="-1">针对 Vercel 部署的更新方式 <a class="header-anchor" href="#针对-vercel-部署的更新方式" aria-label="Permalink to &quot;针对 Vercel 部署的更新方式&quot;">​</a></h2><ol><li>进入 <a href="https://vercel.com/dashboard" target="_blank" rel="noreferrer">Vercel 仪表板</a> - twikoo - Settings - Git</li><li>点击 Connected Git Repository 下方的仓库地址</li><li>打开 package.json，点击编辑</li><li>将 <code>&quot;twikoo-vercel&quot;: &quot;latest&quot;</code> 其中的 <code>latest</code> 修改为最新版本号。点击 Commit changes</li><li>部署会自动触发，可以回到 <a href="https://vercel.com/dashboard" target="_blank" rel="noreferrer">Vercel 仪表板</a>，查看部署状态</li></ol><h2 id="针对-railway-和-zeabur-部署的更新方式" tabindex="-1">针对 Railway 和 Zeabur 部署的更新方式 <a class="header-anchor" href="#针对-railway-和-zeabur-部署的更新方式" aria-label="Permalink to &quot;针对 Railway 和 Zeabur 部署的更新方式&quot;">​</a></h2><ol><li>登录 Github，找到部署时 fork 到自己账号下的名为 twikoo-zeabur 的仓库</li><li>打开 package.json，点击编辑</li><li>将 <code>&quot;tkserver&quot;: &quot;latest&quot;</code> 其中的 <code>latest</code> 修改为最新版本号。点击 Commit changes</li><li>部署会自动触发</li></ol><h2 id="针对-netlify-部署的更新方式" tabindex="-1">针对 Netlify 部署的更新方式 <a class="header-anchor" href="#针对-netlify-部署的更新方式" aria-label="Permalink to &quot;针对 Netlify 部署的更新方式&quot;">​</a></h2><ol><li>登录 Github，找到部署时 fork 到自己账号下的名为 twikoo-netlify 的仓库</li><li>打开 package.json，点击编辑</li><li>将 <code>&quot;twikoo-vercel&quot;: &quot;latest&quot;</code> 其中的 <code>latest</code> 修改为最新版本号。点击 Commit changes</li><li>部署会自动触发</li></ol><h2 id="针对-hugging-face-部署的更新方式" tabindex="-1">针对 Hugging Face 部署的更新方式 <a class="header-anchor" href="#针对-hugging-face-部署的更新方式" aria-label="Permalink to &quot;针对 Hugging Face 部署的更新方式&quot;">​</a></h2><ol><li>登录 Hugging Face，找到部署的 Space，点击上方 Settings，往下滚动找到并点击 Factory rebuild</li></ol><h2 id="针对私有部署的更新方式" tabindex="-1">针对私有部署的更新方式 <a class="header-anchor" href="#针对私有部署的更新方式" aria-label="Permalink to &quot;针对私有部署的更新方式&quot;">​</a></h2><ol><li>停止旧版本 <code>kill $(ps -ef | grep tkserver | grep -v &#39;grep&#39; | awk &#39;{print $2}&#39;)</code></li><li>拉取新版本 <code>npm i -g tkserver@latest</code></li><li>启动新版本 <code>nohup tkserver &gt;&gt; tkserver.log 2&gt;&amp;1 &amp;</code></li></ol><h2 id="针对私有部署-docker-的更新方式" tabindex="-1">针对私有部署 (Docker) 的更新方式 <a class="header-anchor" href="#针对私有部署-docker-的更新方式" aria-label="Permalink to &quot;针对私有部署 (Docker) 的更新方式&quot;">​</a></h2><ol><li>拉取新版本 <code>docker pull imaegoo/twikoo</code></li><li>停止旧版本容器 <code>docker stop twikoo</code></li><li>删除旧版本容器 <code>docker rm twikoo</code></li><li><a href="#私有部署-docker">启动新版本容器</a></li></ol><h2 id="自动更新" tabindex="-1">自动更新 <a class="header-anchor" href="#自动更新" aria-label="Permalink to &quot;自动更新&quot;">​</a></h2><p>考虑到可用性和安全性问题，Twikoo 没有实现自动更新，也没有计划实现自动更新。如果您希望实现自动更新，可以参考 MHuiG 基于 Github 工作流的 <a href="https://github.com/MHuiG/twikoo-update" target="_blank" rel="noreferrer">twikoo-update</a> 的实现方式。</p>',26)]))}const k=a(l,[["render",r]]);export{p as __pageData,k as default};
