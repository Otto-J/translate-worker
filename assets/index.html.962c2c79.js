import{_ as l,o as i,c,a as n,d as e,w as d,b as s,e as p,r as a}from"./app.260e331e.js";const r={},u=n("h1",{id:"mongodb",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mongodb","aria-hidden":"true"},"#"),s(" MongoDB")],-1),m=n("p",null,"\u6587\u6863\u5B98\u7F51 https://www.mongodb.com/docs/",-1),v=n("p",null,"\u76EE\u524D MongoDB \u6709 v4.4+ v5.0 v6.0",-1),_=n("h2",{id:"\u8865\u5145",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8865\u5145","aria-hidden":"true"},"#"),s(" \u8865\u5145")],-1),k=n("li",null,[s("vscode \u63D2\u4EF6 "),n("code",null,"mongodb.mongodb-vscode")],-1),b=n("li",null,[n("code",null,"docker pull mongo:5.0.10")],-1),h={href:"https://hub.docker.com/_/mongo",target:"_blank",rel:"noopener noreferrer"},g=s("Docker Hub"),x=p(`<p>docker \u547D\u4EE4\u884C\u542F\u52A8\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -d -p <span class="token number">27017</span>:27017 <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MONGO_INITDB_ROOT_USERNAME</span><span class="token operator">=</span>xinbao <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MONGO_INITDB_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">12345678</span> <span class="token punctuation">\\</span>
-v ~/mongodb-data:/data/db <span class="token punctuation">\\</span>
--name simple-mongo <span class="token punctuation">\\</span>
mongo:5.0.10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8\u4E4B\u540E\uFF0C\u5728 vscode \u7684\u63D2\u4EF6\u4E2D\uFF0C\u8FDB\u884C\u6570\u636E\u5E93\u8FDE\u63A5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mongodb://xinbao@12345678@localhost:27017
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>docker-compose</code> \u547D\u4EE4\u884C\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.1&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">mongo</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mongo<span class="token punctuation">:</span>5.0.10
    <span class="token comment">#command: --serviceExecutor adaptive</span>
  <span class="token key atrule">environment</span><span class="token punctuation">:</span>
    <span class="token key atrule">MONGO_INITDB_ROOT_USERNAME</span><span class="token punctuation">:</span> xinbao
    <span class="token key atrule">MONGO_INITDB_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token number">12345678</span>
    <span class="token key atrule">MONGO_INITDB_DATABASE</span><span class="token punctuation">:</span> demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u5185\u5BB9" aria-hidden="true">#</a> \u5185\u5BB9</h2><ul><li>\u4F7F\u7528 MongoDB\u3002\u5B66\u4E60\u57FA\u672C\u6280\u80FD\uFF0C\u67E5\u8BE2\u3001\u805A\u5408\u3001\u5206\u6790\u3002</li><li>\u90E8\u7F72 MongoDB Atlas\u3002\u5728\u4E0D\u540C\u4E91\u5E73\u53F0\u514D\u8D39\u4F7F\u7528 MongoDB\u3002</li><li>\u8FDE\u63A5\u5230\u5E94\u7528\u3002\u4F7F\u7528\u7F16\u7A0B\u8BED\u8A00\u8FDE\u63A5\u6570\u636E\u5E93\u3002</li><li>\u63A2\u7D22\u4F60\u7684\u6570\u636E\u3002\u901A\u8FC7\u9875\u9762\u641C\u7D20\u3001\u67E5\u8BE2\u3001\u53EF\u89C6\u5316\u6570\u636E\u3002</li><li>\u6784\u5EFA\u6570\u636E\u53EF\u89C6\u5316\u3002\u521B\u5EFA\u56FE\u8868\u3001\u4EEA\u8868\u76D8\u63ED\u793A\u6570\u636E\u8D8B\u52BF\u3002</li><li>\u6784\u5EFA\u79FB\u52A8\u5E94\u7528\u3002\u6784\u5EFA\u6301\u4E45\u5316\u3001\u540E\u7AEF\u540C\u6B65\u7684\u5E94\u7528</li></ul>`,8),O=s("next "),f=s("\u4ECB\u7ECD");function N(B,D){const o=a("ExternalLinkIcon"),t=a("RouterLink");return i(),c("div",null,[u,m,v,_,n("ul",null,[k,b,n("li",null,[n("a",h,[g,e(o)])])]),x,n("p",null,[O,e(t,{to:"/mongodb/introduction/"},{default:d(()=>[f]),_:1})])])}var M=l(r,[["render",N],["__file","index.html.vue"]]);export{M as default};