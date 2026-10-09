/* Learning supplements, curated 2026-10-09. All maps are semantic HTML. */
const learningContent = {
resources: [
{id:'modernconcepts',name:'Raschka · 现代 LLM 概念图解',url:'https://sebastianraschka.com/llms-from-scratch/ch04/',type:'概念与代码导读',stage:'S1 · S2',level:'入门（懂基础 Attention）',language:'英文',access:'免费',why:'补经典 Transformer 图解未覆盖的 RoPE、GQA、RMSNorm 和 MoE，连接教学 GPT 与现代模型。',focus:'只选 RMSNorm、RoPE、GQA 三篇；对照小张量实现，不在此阶段扩展到所有新架构。',group:'工程导读'},
{id:'d2ltensor',name:'《动手学深度学习》：数据操作',url:'https://zh.d2l.ai/chapter_preliminaries/ndarray.html',type:'在线书籍',stage:'预备 · S1',level:'零基础',language:'中文',access:'免费',why:'从能运行的张量例子理解 shape、广播、索引和内存；比 API 列表更适合作为第一课。',focus:'只读 2.1；跑例子后改变维度，解释每次输出。代码选择 PyTorch 页签。',group:'入门教材'},
{id:'d2lmath',name:'《动手学深度学习》：线性代数',url:'https://zh.d2l.ai/chapter_preliminaries/linear-algebra.html',type:'在线书籍',stage:'预备 · S1',level:'零基础',language:'中文',access:'免费',why:'补矩阵乘法、轴与归约的基础，能读懂 Attention 中张量的尺寸变化。',focus:'只读 2.3 的张量、归约和矩阵乘；不需要先学完整训练课程。',group:'入门教材'},
{id:'torchbasics',name:'PyTorch Learn the Basics · 教学版',url:'https://docs.pytorch.org/tutorials/beginner/basics/intro.html',type:'入门教程',stage:'预备 · S1',level:'零基础',language:'英文',access:'免费',why:'这是面向初学者的教学教程，区别于 testing 等 API 参考文档。',focus:'选读 Tensors 与 Build Model；本路线先跳过训练循环和优化器。',group:'入门教材'},
{id:'illustrated',name:'The Illustrated Transformer',url:'https://jalammar.github.io/illustrated-transformer/',type:'图解博客',stage:'S1',level:'入门',language:'英文／图解',access:'免费',why:'先借图理解 Q/K/V、Attention 与模型结构，再阅读代码。',focus:'读完画出一次 Attention 的数据流；经典 Transformer 与现代 decoder-only 模型有差异。',group:'入门教材'},
{id:'raschka',name:'Build a Large Language Model (From Scratch)',url:'https://www.manning.com/books/build-a-large-language-model-from-scratch',type:'纸质／电子书',stage:'S1 · S2',level:'入门（会 Python）',language:'英文',access:'书籍付费',why:'用从零构建的小型 GPT 建立前向计算的完整认识，适合逐段跟写。',focus:'选读第 2–4 章及附录 A 的 PyTorch 基础；训练、微调暂不作为主线。可用免费配套代码先学。',group:'入门教材'},
{id:'raschka-code',name:'LLMs-from-scratch · 书籍配套代码',url:'https://github.com/rasbt/LLMs-from-scratch',type:'跟练项目',stage:'S1',level:'入门',language:'英文',access:'免费',why:'以章节 notebook 跟练 tokenization、Attention 和 GPT 前向，不必购买书籍才能开始实验。',focus:'按 ch02 → ch03 → ch04；附录 A 补 PyTorch。实现的是教学 GPT，不覆盖全部现代模型。',group:'入门教材'},
{id:'async',name:'《动手学深度学习》：异步计算',url:'https://zh.d2l.ai/chapter_computational-performance/async-computation.html',type:'在线书籍',stage:'S0 · S2',level:'入门',language:'中文',access:'免费',why:'用简单实验理解 GPU 异步执行，避免误把提交时间当成算子执行时间。',focus:'选读 12.2；对比同步与不同计时方法，并解释预热的必要性。',group:'入门教材'},
{id:'brrr',name:'Making Deep Learning go Brrrr',url:'https://horace.io/brrr_intro.html',type:'原理博客',stage:'S0 · S2',level:'入门到进阶',language:'英文',access:'免费',why:'从带宽、计算与开销的直觉理解性能，连接张量代码和 GPU 热点。',focus:'先读硬件、带宽与开销的部分。文章偏训练，推理结论仍需用自己的负载验证。',group:'工程导读'},
{id:'use',name:'Brendan Gregg · The USE Method',url:'https://www.brendangregg.com/usemethod.html',type:'方法博客',stage:'S0 · S5',level:'入门',language:'英文',access:'免费',why:'用利用率、饱和度、错误建立问题清单，避免只看 GPU utilization。',focus:'先按资源列 CPU/GPU/内存/链路，再记录指标和证据；通用系统方法，不是 GPU 专用教程。',group:'工程导读'},
{id:'kvintro',name:'KV Cache from scratch in nanoVLM',url:'https://huggingface.co/blog/kv-cache',type:'图解与代码',stage:'S1 · S4',level:'入门（懂 Attention）',language:'英文',access:'免费',why:'先解释为什么缓存 K/V，再看最小代码；适合做有无缓存的对照实验。',focus:'先学普通 KV Cache；分页与前缀复用留到 S4。',group:'工程导读'},
{id:'moeintro',name:'Mixture of Experts Explained',url:'https://huggingface.co/blog/moe',type:'概念博客',stage:'S1 · S3',level:'入门',language:'英文',access:'免费',why:'理解路由、专家、稀疏激活和负载均衡，避免把总参数与激活参数混为一谈。',focus:'先读 MoE、路由和推理相关部分；训练细节作为选修。',group:'工程导读'},
{id:'quantintro',name:'Introduction to Quantization',url:'https://huggingface.co/blog/merve/quantization',type:'概念博客',stage:'S3',level:'入门',language:'英文',access:'免费',why:'先理解低位宽、scale 和精度取舍，再进入 NVFP4 布局与硬件约束。',focus:'它是通用量化入门，不是 NVFP4 实现规范；先做小张量 quantize/dequantize。',group:'工程导读'},
{id:'puzzles',name:'GPU MODE · Triton Puzzles',url:'https://github.com/gpu-mode/Triton-Puzzles',type:'交互练习',stage:'S2',level:'入门（懂张量）',language:'英文',access:'免费',why:'以逐题练习补 load/store、mask、广播和归约，比直接写 GEMM 更平滑。',focus:'从简单逐元素题做起，再进入归约；本地跟练需要兼容 GPU 环境。',group:'入门教材'},
{id:'gptfast',name:'GPT, Fast · PyTorch 工程博客',url:'https://pytorch.org/blog/accelerating-generative-ai-2/',type:'工程案例',stage:'S2 · S3 · S4',level:'进阶导读',language:'英文',access:'免费',why:'观察一组优化怎样逐步连接到生成路径，学习基准、编译与量化的实验思路。',focus:'先读图表和优化步骤；代码与性能是历史案例，不照搬版本或加速数字。',group:'工程导读'},
{id:'ostep',name:'OSTEP · Introduction to Paging',url:'https://pages.cs.wisc.edu/~remzi/OSTEP/vm-paging.pdf',type:'免费书籍章节',stage:'S4',level:'入门（系统概念）',language:'英文',access:'免费',why:'通过操作系统分页理解页、页表与碎片，再类比 KV blocks。',focus:'只读第 18 章；KV 分页不等同于 CPU 虚拟内存，类比后要回到 PagedAttention。',group:'入门教材'},
{id:'sre',name:'Google SRE · Monitoring Distributed Systems',url:'https://sre.google/sre-book/monitoring-distributed-systems/',type:'免费书籍章节',stage:'S0 · S4 · S5',level:'入门（服务工程）',language:'英文',access:'免费',why:'用延迟、流量、错误与饱和度理解服务观测，补足只看峰值吞吐的盲点。',focus:'选读四个黄金信号；把延迟映射到 TTFT/TPOT/E2E，而非照搬通用阈值。',group:'工程导读'},
{id:'turing',name:'The Turing Way · 可复现研究手册',url:'https://book.the-turing-way.org/reproducible-research/overview/',type:'在线手册',stage:'S0 · S5',level:'入门',language:'英文',access:'免费',why:'从可复现的定义开始理解环境、版本与共享，让报告可以由别人重跑。',focus:'先读 overview，再按当前缺口读版本控制、测试与可复现环境。',group:'工程导读'},
{id:'mlsystems',name:'Designing Machine Learning Systems',url:'https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/',type:'纸质／电子书',stage:'S3–S5 · 选修',level:'进阶（工程基础）',language:'英文',access:'书籍付费',why:'补部署、评估、监控与工程取舍；适合后期系统性阅读，不是零基础 PyTorch 教材。',focus:'选读第 6–8、10 章；免费替代：Google SRE 与 The Turing Way。',group:'工程导读'}
],
stages:[
{root:'S0 · 先把性能测可信',prereq:'能运行现有服务、会读日志。若不懂张量或异步计算，先完成起步区的预备学习。',concepts:[['Prefill / Decode','一次处理输入 / 逐步生成输出；瓶颈随 batch 与长度变化。'],['TTFT / TPOT / E2E','首 Token、每输出 Token、整个请求的耗时。'],['SLO / Goodput','先约定体验目标，再统计达标请求产能。'],['算力 / 带宽 / 启动开销','区分算不动、搬不动和等太久。'],['冷启动 / 稳态 / 测量噪声','首次编译、预热和随机波动要分别记录。']],tasks:['T1 锁定环境与模型版本','T2 建立三类请求负载','T3 采集延迟、吞吐与失败率','T4 标记 trace，测拓扑与通信','T5 用证据排序前三个瓶颈'],labs:[['改变并发','同一模型在低/中/高到达率下比较尾延迟与吞吐。'],['比较计时方式','不预热、不同步与正确计时各测一次，解释差异。'],['分解一次请求','把排队、prefill、decode 和传输标在 trace 上。']],proof:[['作品','原始结果、环境清单和瓶颈报告。'],['自问','为什么 GPU 利用率高，用户仍可能觉得慢？']],steps:[['理解指标','2–3 小时','先读 USE 和 SRE 黄金信号，整理一张指标解释卡。',['use','sre']],['建立性能直觉','3–5 小时','读异步计算；对照 brrr 的带宽/开销图，做错误计时实验。',['async','brrr']],['小实验到真实负载','1–2 个工作日','用 vLLM 压测现有服务；读文档只为设置参数，不作为第一课。',['bench']]],question:'你能指出一个测量假象，以及一个有 trace 支撑的真实瓶颈吗？'},
{root:'S1 · 把一个 Token 的路讲清楚',prereq:'知道 shape/dtype/device、矩阵乘和 softmax；通过预备练习即可，无需先学训练。',concepts:[['Token / Embedding / Logits','编号映射为向量；最终向量转为词表分数。'],['Q/K/V / Causal mask','用注意力选择历史信息，屏蔽未来位置。'],['RoPE / GQA / KV Cache','位置表示、共享 KV 头和历史缓存，职责不同。'],['MoE Router / Expert','按路由选择少数专家；总参数不等于每 Token 的激活量。'],['浮点误差 / atol / rtol','实现差分与量化质量损失要分开。']],tasks:['T1 跟写小模型完整前向','T2 拆出 RoPE/GQA/Norm/MoE','T3 验证目标模型子图','T4 分开量化与实现误差','T5 多步 logits 与业务回归'],labs:[['小 Attention','从 Q/K/V 的 shape 算出一次输出，先不用完整引擎。'],['加 KV 缓存','固定输入，比较有/无 KV 的结果与时间。'],['负例测试','故意错置 mask/位置/scale，看测试能否定位。']],proof:[['作品','前向图、参考代码、子图误差报告。'],['自问','为什么生成文字相同仍不能证明算子正确？']],steps:[['看图并验证基础算子','2–4 小时导读＋按基础安排算子练习','图解 Transformer 后补 KV、MoE 与现代结构；用小张量验证 RoPE/GQA/Norm/路由，再进入完整模型。',['illustrated','kvintro','moeintro','modernconcepts']],['再跟写','1–2 周专题','按 Raschka ch02–ch04 做 tokenization、Attention 和 GPT 前向；不跑完整训练。',['raschka','raschka-code']],['迁移到实际模型','1–2 周专题','对比现代模型配置，把 RoPE/GQA/MoE 差异拆成测试；最后查 API 的误差参数。',['modernconcepts','nano','testing']]],question:'不用看源码，你能画出一个 decode token 的形状变化与 KV 读写吗？'},
{root:'S2 · 从张量到一个 GPU Kernel',prereq:'S1 对应算子有参考实现；懂归约、广播与 mask。需要可用的 Triton/GPU 环境。',concepts:[['Program / Tile / Mask','把张量分块并安全处理尾部，避免越界。'],['Load / Store / Coalescing','访存方式决定带宽利用率。'],['Reduction / Fusion','归约与融合减少重复访存和中间结果。'],['Warm-up / GPU 计时','先预热，计入真正执行时间和波动。'],['Dispatch / Graph / Fallback','确保引擎调用新算子，图执行与回退仍可用。']],tasks:['T1 实现 RMSNorm 或 RoPE','T2 与参考和成熟 kernel 对比','T3 提早注册与确认 dispatch','T4 验证 eager/graph/fallback','T5 解释收益，非热点及时止损'],labs:[['Puzzle 梯度','逐元素 → 广播/mask → 归约 → Norm。'],['单变量调优','只变 tile 或融合策略，记录性能与误差变化。'],['受控接入','同一个 prompt 比较原版与实验扩展，记录实际调用。']],proof:[['作品','一个 kernel、边界测试和集成报告。'],['自问','微基准快了，为什么端到端可能不变？']],steps:[['练语法与布局','半天–1 天','先做 Triton Puzzles 的基础与归约题，不从 NVFP4 GEMM 起步。',['puzzles']],['跟一个完整例子','2–4 天','按 Triton 教程练融合/矩阵运算；以 S1 参考代码实现 Norm。',['triton','brrr']],['学工程闭环','1–2 周专题','先读 GPT, Fast 的实验思路，再按锁定版本的 CustomOp 接口接入。',['gptfast','custom']]],question:'你能解释每个 mask、访存和归约，再用测试证明布局与尾块正确吗？'},
{root:'S3 · 正确理解量化与后端适配',prereq:'S1 的数值契约与 S2 的集成方法；无需先独立实现高性能 GEMM。',concepts:[['Bit-width / Scale / Dequant','小数用更少位表示；scale 参与还原。'],['Packing / Block scale','存储布局与计算格式必须匹配后端。'],['NVFP4 ≠ 通用 INT4','表示和缩放契约不同，不能互换参考实现。'],['Capability / 编译目标 / 指令','能识别设备不等于二进制或指令可用。'],['质量预算 / 回滚 / 版本矩阵','性能之外，还要保持输出质量与可维护性。']],tasks:['T1 建立多维能力矩阵','T2 复测当前真实问题','T3 先复用，再最小改动','T4 目标模型质量与回滚验证','T5 交叉复现并提交上游提案'],labs:[['玩具量化','用小矩阵展示位宽、scale、误差与异常值。'],['定位层级','把失败归类为门控/编译/布局/指令，做最小复现。'],['两种基线','同量化权重看实现差分；高精度基线看质量损失。']],proof:[['作品','能力矩阵、补丁、质量报告与回滚路径。'],['自问','为何加设备判断不能保证 kernel 可运行？']],steps:[['建立概念','3–5 小时','先读通用量化与 MoE 入门；实现小矩阵 quantize/dequantize。',['quantintro','moeintro']],['用案例理解工程','半天–1 天','读 GPT, Fast 的量化思路，再阅读历史后端修复；不要照搬版本结论。',['gptfast','issue']],['深入目标契约','2–4 周专题','确定 checkpoint scale/packing 后再查 NVFP4、CUTLASS 和插件接口，最后做真实回归。',['nvfp4','cutlass','plugin']]],question:'你能把“格式误解”“后端不支持”“量化质量下降”分成三种不同问题吗？'},
{root:'S4 · 用系统视角改善服务',prereq:'基线可信，生产路径稳定；懂普通 KV Cache，能读一次请求 trace。',concepts:[['Queue / Continuous batching','请求到达、排队与批次动态变化。'],['Chunked prefill / 干扰','长输入切块以控制与 decode 的竞争。'],['KV Block / Prefix hit','分页和前缀复用，分别解决分配与重复计算。'],['TP / EP / All-to-all','切分张量或专家，必须计入通信和负载偏斜。'],['PD 分离 / KV Transfer','计算阶段拆分；传输与额外资源可能抵消收益。']],tasks:['T1 复现长短请求干扰','T2 KV 瓶颈才选缓存分支','T3 通信瓶颈才选并行分支','T4 有证据才做 PD PoC','T5 消融、soak 与 SLO 成本'],labs:[['页表小模拟','用列表演示逻辑 token 到 KV block 映射，解释碎片。'],['请求重放','同模型同负载，单变量改分块或缓存，观察尾延迟。'],['分支成本表','估计 KV 传输/通信开销，再用实测验证是否值得。']],proof:[['作品','消融曲线、稳定性与适用边界。'],['自问','为什么吞吐更高，SLO 内产能却更低？']],steps:[['先用类比','半天–1 天','KV 入门后读 OSTEP 分页；画块映射，再读 PagedAttention 对应机制。',['kvintro','ostep','paged']],['看小系统','1–2 周专题','从 nano-vLLM/mini-SGLang 的调度与缓存入口按问题阅读，不通读整个仓库。',['nano','mini']],['回到真实负载','2–4 周一个分支','以 SRE 观测方法看尾延迟；只有确认干扰与传输预算，才读 Mooncake 深入 PD。',['sre','moonpaper']]],question:'你能用一张消融图证明是哪项改动有效，并说明它何时失效吗？'},
{root:'S5 · 让能力可以迁移与交接',prereq:'已有基准、测试和适配资产；新对象的设备、权重与 SDK 可获取。',concepts:[['Reproducible / Repeatable','把环境、输入、配置和结果绑定为证据。'],['Regression / Negative test','已有能力不退化；不支持路径也要测试。'],['Go / No-go / Blocked','可运行、不支持、条件未满足，分别给证据。'],['Quality / SLO / Cost','质量、体验与资源成本联合评估。'],['SOP / 双人覆盖 / 决策记录','另一个人能接手，而不只是读懂文档。']],tasks:['T1 版本与回归自动化','T2 新对象盲测','T3 十工作日判定','T4 能跑测性能，不能跑给证据','T5 非作者复现并更新 SOP'],labs:[['空环境复现','换成员、换环境，按说明重新跑一份既有报告。'],['10 天演练','按资源核查、smoke、子图、负载、复现顺序推进。'],['演练失败报告','故意缺少编译目标或权重，输出 blocked 和解除条件。']],proof:[['作品','评估工具箱、SOP 与迁移结论。'],['自问','缺少厂商驱动时，你仍能给出哪些可信结论？']],steps:[['学可复现','2–4 小时','读 Turing Way 的概念并审查自己的环境、版本和输入是否齐全。',['turing']],['选演练对象与系统取舍','半天–1 天','免费主读 SRE；有基础再选读 ML Systems 第 6–8、10 章。',['sre','mlsystems']],['做迁移演练','10 个工作日','用非作者复现和 go/no-go/blocked 报告验收；学过的资料转为 checklist。',['use','turing']]],question:'如果核心成员明天不在，别人能否从空环境复现你的结论？'}
],
weeks:[
['第1周','S0','建立指标直觉、环境清单与小负载','指标解释卡 + 可重跑启动命令','async','sre'],
['第2周','S0 / G0','三类负载、一次 trace、前三瓶颈','原始基准 + 带证据的问题排序','use','bench'],
['第3周','S1','Token、矩阵、Q/K/V、causal mask','手算小 Attention 的形状与输出','illustrated','raschka-code'],
['第4周','S1','小模型前向与普通 KV；简化 MoE','前向图 + 有/无 KV 对照','kvintro','moeintro'],
['第5周','S1 + S2','对应算子对拍；基础 Triton 练习','误差契约 + 广播/mask/归约练习','testing','puzzles'],
['第6周','G1 + S2','完成参考子图，开始算子试接入','G1 证据 + 实际 dispatch 记录','nano','custom'],
['第7周','S2','RMSNorm 或 RoPE 正确性与微基准','尾块、布局测试 + 波动报告','triton','async'],
['第8周','S2','eager、graph、fallback 和模型 smoke','端到端对照 + 回退开关','custom','gptfast'],
['第9周','S2','优化热点，解释收益与不适用情况','带宽/启动开销归因 + 非作者复现','brrr','nsight'],
['第10周','G2','收敛首个集成闭环，决定是否生产启用','G2 报告；学习通过与部署决定分开','plugin','bench'],
['第11周','S3 准备','通用量化与小矩阵还原、质量损失','量化 toy 实验 + 两种基线说明','quantintro','eval'],
['第12周','S3 准备','选真实卡点与适配专题，核对当前版本','能力矩阵 + 下一阶段问题与止损条件','moeintro','issue']
]
};

function renderMindmap(s){
const m=learningContent.stages[s.n];
const branches=[['概念地图',m.concepts],['阶段任务',m.tasks.map(t=>[t,'对应下方学习步骤中的 Todo，产出证据后再勾选。'])],['动手实验',m.labs],['交付与验收',m.proof]];
return `<figure class="mindmap" aria-labelledby="map-title-${s.n}"><figcaption><h3 id="map-title-${s.n}">阶段思维导图</h3><span>展开分支查看关联概念与任务</span></figcaption><div class="map-root">${m.root}<small>${s.milestone}</small></div><div class="map-branches">${branches.map(([name,nodes],i)=>`<details class="map-branch branch-${i}" open><summary>${name}<small>${nodes.length} 节点</small></summary><ul>${nodes.map(([title,text])=>`<li><strong>${title}</strong><span>${text}</span></li>`).join('')}</ul></details>`).join('')}</div></figure>`;
}
const stepTasks = [
[[0,2],[3],[1,4]],
[[1],[0],[2,3,4]],
[[0],[1,4],[2,3]],
[[0],[1,2],[3,4]],
[[1],[0,2],[3,4]],
[[0],[1],[2,3,4]]
];
const stepQuestions = [
[
['TTFT、TPOT、E2E 分别包含哪些时间？为什么不能只报平均 tokens/s？','怎样固定版本与输入，区分冷启动、稳态和随机波动？'],
['一次请求的时间线如何区分 CPU 等待、GPU 计算、数据搬运和通信？','GPU 利用率高是否说明算力已饱和？你还需要哪些证据？'],
['三类负载的长度、到达率和 SLO 应如何固定，才能公平比较？','前三个瓶颈为什么值得投入？升级或调参是否已能解决？']
],
[
['Q/K/V、RoPE、GQA 与 KV Cache 各自解决什么问题？张量形状如何变化？','简化 MoE 如何路由到专家？哪些边界输入能检验算子正确性？'],
['输入 token 如何经过 embedding、Attention、MLP，最终变成 logits？','prefill 与 decode 中哪些计算相同，哪些因 KV Cache 而改变？'],
['目标模型与教学 GPT 的结构、量化布局有什么差异？','如何区分实现误差与量化质量损失？为什么 top-k 相同仍不足以通关？']
],
[
['program、tile、load/store 与 mask 如何对应到张量？','RMSNorm 或 RoPE 的参考公式是什么？尾块和非连续布局会怎样影响实现？'],
['为什么必须预热并正确同步计时？基准的 shape、dtype 与布局是否相同？','相对 PyTorch 和引擎成熟 kernel 的差距来自带宽、归约还是启动开销？'],
['怎样证明引擎真的调用了新 kernel，而没有悄悄 fallback？','eager、编译、CUDA Graph 和多进程加载怎样回归？如何一键退回原版？']
],
[
['位宽、scale、packing 各自改变什么？NVFP4 为什么不能当通用 INT4 使用？','能力矩阵要记录哪些模型、硬件、引擎与后端版本，才能判断支持边界？'],
['当前失败是设备门控、编译目标、权重布局还是缺失指令？','历史修复是否已覆盖当前版本？为什么优先升级或复用已有后端？'],
['同量化权重的实现对拍与高精度基线的质量评估，各证明什么？','改动在什么负载有效、什么时候退化？非作者能否复现并回滚？']
],
[
['普通 KV Cache、分页 KV 与前缀复用分别省了什么？','缓存命中、驱逐、重计算和 KV dtype 怎样影响显存、质量与延迟？'],
['长 prefill 是否阻塞短请求的 decode？怎样用混合请求重放验证？','TP/EP 的数据怎样切分、通信花在哪里？配置收益是否被链路或负载偏斜抵消？'],
['PD 分离减少的干扰，能否覆盖 KV 传输与额外资源成本？','怎样通过单变量消融和 soak，证明质量与 SLO 下的收益，而非只提高峰值吞吐？']
],
[
['一份报告缺了哪项环境、输入或版本信息，会让别人无法复现？','哪些判断应该变成自动回归或负例测试？关键资产是否有双人维护？'],
['选择哪个未接触的模型或硬件，才能真正检验迁移能力？','设备、权重、SDK 与驱动哪些条件已到位？哪些未满足条件需要单独记录？'],
['如何在十个工作日内给出 supported、unsupported 或 blocked 的可信结论？','能跑时如何报告质量与性能；不能跑时如何给出证据、解除条件与交接 SOP？']
]
];
const stepOutputs = [
['指标解释卡、环境清单与初始测量结果。','带标记的请求 trace、硬件拓扑与通信基线。','三类负载的基准报告与前三瓶颈决策记录。'],
['基础算子测试与张量形状说明。','小模型前向代码、执行图与 KV 对照。','目标子图误差报告、量化质量预算与多步回归结果。'],
['一个可运行的 Triton 算子与边界测试。','微基准、性能归因与继续／止损判断。','实验扩展、实际 dispatch 证据、端到端回归与回退开关。'],
['带版本和证据入口的能力矩阵。','当前问题的最小复现、分类与最小改动方案。','目标模型 A/B 与质量报告、可复现补丁及回滚说明。'],
['KV 分支的块映射、命中率／显存／质量对照。','混合负载 trace、并行配置与通信对照。','PD 进入／暂缓判断、消融／soak 与 SLO 成本报告。'],
['自动回归资产清单与双人维护安排。','盲测对象、资源核查表与演练边界。','十日评估报告、非作者复现记录与更新后的 SOP。']
];
function renderLearningGuide(s){const m=learningContent.stages[s.n];return `<section class="learning-guide"><h3>怎么学：入门导读与跟练</h3><p class="entry-requirement"><b>进入条件</b> ${m.prereq}</p><p class="fine">每一步按「阅读 → 回答问题 → 完成 Todo → 留下产出」推进。T1–T5 对应本阶段原有任务；已有勾选记录保持有效。</p><ol class="study-steps">${m.steps.map(([title,time,task,ids],i)=>`<li id="s${s.n}-step${i+1}"><div class="study-number">${i+1}</div><div><h4>${title} <small>${time}</small></h4><p>${task}</p><div class="study-links">${ids.map(id=>{const r=R(id);return `<div>${link(r)}<small>${r.language||'工程资料'} · ${r.level||'接口／实现查阅'} · ${r.access||'免费'}${r.id==='testing'?' · 做过对拍后再查':''}</small></div>`}).join('')}</div><div class="step-section"><h5>本步要回答</h5><ul class="step-questions">${stepQuestions[s.n][i].map(q=>`<li>${q}</li>`).join('')}</ul></div><div class="step-section"><h5>本步 Todo</h5><div class="checklist">${stepTasks[s.n][i].map(j=>`<label class="task"><input type="checkbox" data-task="${s.n}-${j}" ${saved.tasks[`${s.n}-${j}`]?'checked':''}><span><b class="task-tag">T${j+1}</b>${s.tasks[j]}</span></label>`).join('')}</div></div><div class="step-output"><b>本步产出</b> ${stepOutputs[s.n][i]}</div></div></li>`).join('')}</ol><div class="self-check"><b>阶段学完能回答</b> ${m.question}</div><p class="source-line">时长为阅读／专题练习的建议预算，不是新增项目周期；按基础调整。所有书籍均为选读，付费书有免费跟练或替代材料。</p></section>`}
function renderDetailedRoadmap(){return `<section class="panel searchable" id="start-guide"><div class="eyebrow">LEARNING PATH / 先补概念，再进入工程</div><h2>从这里开始：先修诊断与前 12 周安排</h2><p>会部署不等于熟悉张量计算。先做下面三个小练习；都能解释就直接进入 S0，遇到卡点再补对应教材。</p><div class="foundation-path"><div><b>01 · 张量与矩阵</b><p>创建 [2,3] 与 [3,4] 的矩阵并相乘，解释输出 shape；再做广播与归约。</p>${link(R('d2ltensor'))}<br>${link(R('d2lmath'))}</div><div><b>02 · PyTorch 前向</b><p>写一个小 Module，区分 dtype/device；能用 no_grad 做前向并看懂输出 logits。</p>${link(R('torchbasics'))}<br>${link(R('raschka-code'))}</div><div><b>03 · GPU 与计时</b><p>解释为什么 GPU 调用返回不代表执行已结束；做一次有/无同步的计时对照。</p>${link(R('async'))}<br>${link(R('brrr'))}</div></div><p class="fine">若上述练习多数不会，建议先补 1–2 周（每周约 6–10 小时）再按基线调整工程排期。若已有基础，选读即可；不要求通读深度学习书籍或先训练一个模型。</p><details class="weekly-plan" open><summary>前 12 周 Roadmap · 学习、实验与交付对照</summary><div class="table-wrap"><table><thead><tr><th>周次</th><th>阶段</th><th>这周做什么</th><th>留下什么</th><th>开始阅读</th></tr></thead><tbody>${learningContent.weeks.map(([week,stage,task,output,a,b])=>`<tr><td>${week}</td><td>${stage}</td><td>${task}</td><td>${output}</td><td>${link(R(a))}<br>${link(R(b))}</td></tr>`).join('')}</tbody></table></div></details><div class="notice">周次是建议顺序。G1 的对应算子正确性是集成前提；阅读可以并行，正式准出必须看证据。A 负责算子，B 从第 1 周跟踪引擎路径，C 持续维护基准，三人每周共享一次实验复盘。</div><h3>第 3–12 月：选定专题后持续深化</h3><div class="long-plan"><div><b>第3–5月 · 一个真实增量</b><p>量化／适配只选一个主问题。先学概念，再用两周做最小复现与方案判断，按 G3 收敛。</p><a href="#s3">查看 S3 思维导图与导读</a></div><div><b>第5–8月 · 一条系统分支</b><p>调度、KV、通信三选一。每个实验保留控制变量与失效边界；PD 分离按条件进入。</p><a href="#s4">查看 S4 思维导图与导读</a></div><div><b>第9–12月 · 迁移与交接</b><p>先由非作者复现旧报告，再做新对象 10 天演练。方法和脚本转为可执行 SOP。</p><a href="#s5">查看 S5 思维导图与导读</a></div></div><p class="source-line">教学资料链接核查：2026-10-09。选读范围、练习、难度和时间是本路线的教学建议；工程资料仍需锁定版本。</p></section>`}
function renderResourceRoom(){let groups=['入门教材','工程导读','实现与接口查阅'];return `<div class="searchable"><div class="eyebrow">READING ROOM / 教材先行，手册后查</div><h1>入门材料、工程导读与参考项目</h1><p class="lead">先看图和小例子，再跟写代码，最后按问题查 API。每项标明语言、难度、费用与选读范围，避免把整本书或整个仓库变成学习门槛。</p><div class="notice good">优先：中文《动手学深度学习》 → Transformer 图解／从零 LLM → Triton Puzzles → KV／量化导读。PyTorch testing 等官方 API 手册放在第三层，完成实验后按需查询。</div></div>${groups.map(g=>`<section class="panel" id="group-${groups.indexOf(g)}"><h2>${g}</h2>${resources.filter(r=>(r.group||'实现与接口查阅')===g).map(r=>`<article class="resource-row searchable" id="r-${r.id}"><div><b>${link(r)}</b><small>${r.stage}</small><span class="resource-meta">${r.language||'英文'} · ${r.level||'进阶查阅'} · ${r.access||'免费'}</span></div><div><p>${r.why}</p><small>${r.focus}</small></div><span class="resource-type">${r.type}</span></article>`).join('')}</section>`).join('')}`}
