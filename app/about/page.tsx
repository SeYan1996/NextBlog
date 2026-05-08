import { genPageMetadata } from 'app/seo'
import Image from '@/components/Image'
import Link from '@/components/Link'
import Live2DWidget from '@/components/Live2DWidget'

export const metadata = genPageMetadata({ title: 'Resume' })

const profile = {
  enName: 'Sean',
  cnName: '毕家炜',
  title: 'JavaScript 全栈工程师',
  tagline: '清醒时做事，迷茫时读书。',
  intro:
    '我是毕家炜（Sean），一名以 JavaScript / TypeScript 为主、并有 Golang、Python、Erlang 使用经验的全栈工程师。有后台系统、运营平台等产品独立开发上线经验，并持续通过自动化与 AI 工具提升交付效率。',
  email: 'seyan.career@gmail.com',
  wechat: 'seyanB',
  github: 'https://github.com/SeYan1996',
  npm: 'https://www.npmjs.com/~seyan',
  avatar: '/static/images/avatar.png',
  location: '深圳',
  birth: '1996.04',
  edu: '武汉科技大学 · 网络工程 · 本科',
}

const highlights = [
  { label: '工作年限', value: '8+' },
  { label: '完整项目交付', value: '20+' },
  { label: '主攻方向', value: 'Web · Node · AI' },
]

const skillGroups = [
  {
    title: '前端',
    items: ['Vue 2 / 3', 'React', 'TypeScript', 'Tailwind CSS', 'Ant Design', 'NaiveUI', 'ECharts'],
  },
  {
    title: '后端',
    items: [
      'Node.js',
      'Nest.js',
      'Egg.js',
      'Koa',
      'Think.js',
      'Golang',
      'Beego',
      'Python',
      'Erlang',
    ],
  },
  {
    title: '数据存储',
    items: ['MySQL', 'PostgreSQL', 'Redis', 'MongoDB', 'Firebase'],
  },
  {
    title: '工程化 & 基础设施',
    items: ['Docker', 'Serverless / AWS Lambda', 'Linux', 'CI/CD', '低代码 amis'],
  },
]

const experiences = [
  {
    period: '2026.02 - 2026.05',
    role: 'AI 全栈工程师',
    company: 'OpenArt',
    stack: ['Next.js', 'TypeScript', 'Fal', 'Inngest', 'Firebase', 'AI', 'OpenStore'],
    points: [
      '参与 AI 创作产品的全栈开发，围绕文生图、图生图、图生视频等核心场景搭建端到端生成链路',
      '接入 Fal 等模型平台，封装统一的模型调用层，处理参数编排、任务提交、结果轮询与异常兜底',
      '基于 Next.js 实现创作工作流页面与生成结果展示，优化用户从 prompt 输入到作品产出的交互体验',
      '结合 Inngest / Firebase 承载异步生成任务、用户状态与资源记录，提升长耗时 AI 任务的可追踪性和稳定性',
      '参与 AI 生成资产的存储、状态流转与前后端协作，支持图片、视频等多模态内容的生产和管理',
    ],
  },
  {
    period: '2024.09 - 2026.01',
    role: '全栈工程师',
    company: '天悦互娱',
    stack: ['Nest.js', 'TypeScript', 'React', 'PostgreSQL', 'Firebase', 'AI', 'RevenueCat'],
    points: [
      '负责短剧 APP 后台 API 开发与日常运维，基于 Nest.js 设计数据模型并推进稳定迭代',
      '实现基于 Firebase 的用户认证与登录体系，提升账户安全性与登录体验',
      '接入 RevenueCat 并优化应用内购买和订阅流程，支撑产品变现能力',
      '基于 Claude Desktop 开发 MCP Server 工具链，打通音视频到多语字幕的 AI 处理流程',
      '使用 FFmpeg 提取音频、Whisper 生成 SRT 字幕，并结合 AI 翻译输出多语版本',
    ],
  },
  {
    period: '2023.07 - 2024.09',
    role: '全栈工程师',
    company: '唯品会',
    stack: ['Nest.js', 'TypeScript', 'Vue 3', 'NaiveUI', 'MySQL'],
    points: [
      '基于 Nest.js 设计并落地工单管理系统后台 API，规划数据模型与权限管控',
      '用 TypeScript 实现状态机模式，把复杂的工单流转逻辑收敛到可维护的状态图',
      '使用 Vue 3 + NaiveUI 搭建管理后台，沉淀业务组件并维护私有组件库，提升团队复用效率',
    ],
  },
  {
    period: '2021.09 - 2023.06',
    role: '全栈工程师',
    company: 'Bigo',
    stack: ['Egg.js', 'Vue', 'Ant Design', 'amis', 'MySQL'],
    points: [
      '负责直播运营后台从需求到上线的全流程，使用 Vue + Ant Design 完成前端，Egg.js 支撑后台 API',
      '搭建活动中台，将活动数据下发给多个业务后台，统一活动配置入口',
      '设计礼包系统：抽象出多种 Excel 配置模板，自动解析、校验、入库，明显提高运营自助能力',
      '在合适场景引入 amis 低代码平台快速生成常规页面，把工程师精力留给核心功能',
    ],
  },
  {
    period: '2018.07 - 2021.09',
    role: '全栈工程师',
    company: '深圳来画',
    stack: ['Node.js', 'Vue', 'Golang', 'MySQL', 'Redis', 'Serverless', 'Docker'],
    points: [
      '参与官网与动画工具后台 API 设计开发，保障 Web / APP 端动画工具稳定运行',
      '主导动画转换服务的 Serverless（AWS Lambda）改造，明显降低服务器成本',
      '设计并维护平台会员及商城系统，整理多平台模式下的会员与素材管理逻辑',
      '独立设计素材审核服务，覆盖违规检测、白名单等关键流程',
      '运营后台全栈开发：Egg.js / Beego 提供 REST API，Vue + ElementUI + ECharts 完成可视化',
      '搭建客服系统后台，实现文本 / 图片 / 文件多格式的在线客服会话能力',
      '使用 Docker 将服务打包镜像，统一部署流程',
    ],
  },
]

const projects = [
  {
    name: 'CinPix 在线电影节平台',
    description:
      'CinPix 是一个面向线上电影节和独立电影放映的流媒体票务平台，支持影片展示、场次预订、票务核销、DRM 播放授权、邮件通知、IM 互动、内容同步和后台运营管理。',
    tags: [
      'NestJS',
      'PostgreSQL',
      'Redis',
      'BullMQ',
      'TypeORM',
      'Stripe',
      'Firebase',
      'Cloudflare R2',
      'Brevo',
      'AWS ECS',
    ],
    highlights: [
      '使用 PostgreSQL 事务 + 悲观锁实现座位库存扣减、票号生成与座位分配，保证高并发预订一致性。',
      '接入 Stripe、Firebase 与 JWT 鉴权，打通用户登录、购票流程与票务状态访问控制。',
      '设计 DRM license proxy 与短期播放 token 校验机制，确保仅有效票根用户可访问付费影片。',
      '基于 BullMQ + Redis 实现异步邮件队列，支持预订确认与开场前提醒，并适配多 ECS 实例分布式消费。',
    ],
    links: [],
  },
  {
    name: 'ts-statemachine',
    description:
      '使用 TypeScript 装饰器语法实现的有限状态机：通过装饰器声明状态与事件，根据当前状态触发对应动作，并支持无状态事件。已发布到 npm，仍在迭代中。',
    tags: ['TypeScript', 'Decorator', 'Node.js'],
    links: [
      { label: 'GitHub', href: 'https://github.com/SeYan1996/ts-statemachine' },
      { label: 'npm', href: 'https://www.npmjs.com/package/@seyan/ts-statemachine' },
    ],
  },
  {
    name: 'WebRTC 实时聊天室',
    description:
      '基于 WebRTC 驱动本地媒体设备，在 NAT 穿透后建立浏览器之间的点对点连接，实现实时音视频通信，支持房间频道管理。',
    tags: ['Vue', 'WebRTC', 'Node.js', 'MongoDB'],
    links: [],
  },
  {
    name: 'DNS 隧道',
    description:
      '实现本地代理，将数据包伪装成 53 端口的 UDP 包发送到服务器代理，再通过同样的链路返回应答，用以绕开校园网认证；纯粹是技术练手项目。',
    tags: ['Node.js', 'Networking'],
    links: [],
  },
]

const interests = [
  { emoji: '🎋', label: '竹笛（5 年）' },
  { emoji: '🎹', label: '钢琴（在学）' },
  { emoji: '🏓', label: '乒乓球' },
  { emoji: '🏊', label: '游泳' },
  { emoji: '💪', label: '健身' },
]

export default function Page() {
  const {
    enName,
    cnName,
    title,
    tagline,
    intro,
    email,
    wechat,
    github,
    avatar,
    edu,
    location,
    birth,
  } = profile

  return (
    <div className="relative overflow-hidden py-10 sm:py-14">
      <Live2DWidget />

      <div className="from-primary-100 to-primary-50 dark:from-primary-950/50 pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-linear-to-br via-white blur-3xl dark:via-gray-950 dark:to-gray-900" />

      <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-7">
          <div className="border-primary-200 bg-primary-50 text-primary-700 dark:border-primary-800 dark:bg-primary-950/50 dark:text-primary-300 inline-flex rounded-full border px-4 py-2 text-sm font-medium">
            Resume / Portfolio
          </div>
          <div className="space-y-5">
            <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl dark:text-gray-50">
              你好，我是 {enName}
              <span className="from-primary-500 block bg-linear-to-r to-pink-500 bg-clip-text text-transparent">
                用 AI 把Idea快速落地成可上线的产品体验。
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">{intro}</p>
            <p className="text-base text-gray-500 dark:text-gray-400">
              当前身份：{title} · 坐标 {location} · {edu}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`mailto:${email}`}
              className="bg-primary-600 shadow-primary-500/25 hover:bg-primary-700 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg transition"
            >
              邮件联系
            </Link>
            <Link
              href={github}
              className="hover:border-primary-400 hover:text-primary-600 dark:hover:border-primary-500 dark:hover:text-primary-300 rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 transition dark:border-gray-700 dark:text-gray-100"
            >
              GitHub
            </Link>
            <span className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200">
              微信：{wechat}
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="from-primary-400/25 absolute -inset-3 rounded-[2rem] bg-linear-to-br to-pink-400/20 blur-2xl" />
          <div className="relative rounded-[2rem] border border-gray-200 bg-white/85 p-6 shadow-xl shadow-gray-200/60 backdrop-blur dark:border-gray-800 dark:bg-gray-900/80 dark:shadow-black/20">
            <div className="flex items-center gap-5">
              <Image
                src={avatar}
                alt={enName}
                width={104}
                height={104}
                className="ring-primary-100 dark:ring-primary-900 h-26 w-26 rounded-3xl object-cover ring-4"
              />
              <div>
                <p className="text-primary-600 dark:text-primary-300 text-sm font-medium">
                  Profile
                </p>
                <h2 className="mt-1 text-2xl font-bold text-gray-950 dark:text-gray-50">
                  {cnName}
                  <span className="ml-2 text-base font-medium text-gray-500 dark:text-gray-400">
                    / {enName}
                  </span>
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {title} · {birth}
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-gray-50 p-4 text-center dark:bg-gray-800/70"
                >
                  <div className="text-primary-600 dark:text-primary-300 text-2xl font-black">
                    {item.value}
                  </div>
                  <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="border-primary-200 bg-primary-50/70 dark:border-primary-800 dark:bg-primary-950/30 mt-8 rounded-2xl border border-dashed p-4">
              <p className="text-primary-700 dark:text-primary-200 text-sm leading-6 font-medium">
                “{tagline}”
              </p>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                右下角的 Live2D 看板娘是这份简历的小彩蛋，可以拖动、切换模型、和它互动。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 dark:text-gray-50">
            技能栈
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
            JavaScript / TypeScript 为主，Golang 为辅，关注工程化、稳定性和最终交付。
          </p>
          <div className="mt-6 space-y-5">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <div className="text-primary-600 dark:text-primary-300 text-xs font-semibold tracking-wider uppercase">
                  {group.title}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 dark:text-gray-50">
            工作经历
          </h2>
          <div className="mt-6 space-y-7">
            {experiences.map((experience) => (
              <article
                key={`${experience.period}-${experience.company}`}
                className="border-l-2 border-gray-100 pl-5 dark:border-gray-800"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-lg font-bold text-gray-950 dark:text-gray-50">
                    {experience.company}
                  </h3>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    · {experience.role}
                  </span>
                </div>
                <div className="text-primary-600 dark:text-primary-300 mt-1 text-sm font-semibold">
                  {experience.period}
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {experience.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {experience.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-primary-500 mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-primary-600 dark:text-primary-300 text-sm font-semibold">
              Selected Work
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-950 dark:text-gray-50">
              个人项目
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-gray-500 dark:text-gray-400">
            工作之外的练手与产出，关注语言特性、网络和实时通信。
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="hover:border-primary-300 hover:shadow-primary-500/10 dark:hover:border-primary-700 flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <h3 className="text-lg font-bold text-gray-950 dark:text-gray-50">{project.name}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              {'highlights' in project &&
                Array.isArray(project.highlights) &&
                project.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1.5 text-xs leading-5 text-gray-500 dark:text-gray-400">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-1.5">
                        <span className="text-primary-500 mt-2 inline-block h-1 w-1 shrink-0 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-gray-500 dark:bg-gray-900 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-3 border-t border-gray-200 pt-4 text-xs font-semibold dark:border-gray-800">
                  {project.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-primary-600 hover:text-primary-700 dark:text-primary-300 dark:hover:text-primary-200"
                    >
                      {link.label} →
                    </Link>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-3xl bg-gray-950 p-8 text-white dark:bg-gray-900">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-center">
          <div>
            <p className="text-primary-300 text-sm font-semibold">Working Style & Hobbies</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">清醒时做事，迷茫时读书。</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-gray-300">
            <p>
              我习惯先把问题拆成可验证的小步，再用简洁的设计和可靠的工程实现推进上线；写代码以外，喜欢在民族乐器和运动里找节奏感。
            </p>
            <div className="flex flex-wrap gap-2">
              {interests.map((item) => (
                <span
                  key={item.label}
                  className="rounded-full border border-gray-700 bg-gray-900 px-3 py-1.5 text-sm text-gray-200"
                >
                  <span className="mr-1.5">{item.emoji}</span>
                  {item.label}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              如果你在寻找一个能独立把后台 / 中后台 / 前端组合起来交付的人，欢迎通过{' '}
              <Link
                href={`mailto:${email}`}
                className="text-primary-300 hover:text-primary-200 underline-offset-4 hover:underline"
              >
                {email}
              </Link>{' '}
              联系我。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
