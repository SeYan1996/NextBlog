'use client'

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { useState, useEffect } from 'react'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  const [hoveredIndex, setHoveredIndex] = useState(-1)

  if (!posts.length) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <div className="mb-4 text-6xl">📝</div>
          <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
            No posts found
          </h2>
          <p className="text-gray-500 dark:text-gray-400">Start writing your first blog post!</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* 宋代美学头部区域 */}
      <div className="relative mb-20">
        {/* 背景装饰 - 宋代山水画意境 */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-50/30 via-stone-50/20 to-amber-100/30 dark:from-stone-900/30 dark:via-amber-900/20 dark:to-stone-800/30"></div>
        <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-br from-amber-200/20 to-orange-200/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-gradient-to-tr from-stone-200/20 to-amber-200/20 blur-2xl"></div>

        <div className="relative space-y-6 py-16 text-center">
          <div className="mb-4 inline-block">
            <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></div>
          </div>
          <h1 className="text-4xl font-light tracking-wide text-stone-800 md:text-6xl dark:text-stone-200">
            最新文章
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            {siteMetadata.description}
          </p>
          <div className="mt-4 inline-block">
            <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-orange-500 to-amber-400"></div>
          </div>
        </div>
      </div>

      {/* 宋代美学文章列表 */}
      <div className="mb-16 space-y-8">
        {posts.slice(0, MAX_DISPLAY).map((post, index) => {
          const { slug, date, title, summary, tags } = post
          const isHovered = hoveredIndex === index

          return (
            <article
              key={slug}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              {/* 立体卡片容器 */}
              <div
                className={`relative rounded-2xl border border-stone-200/50 bg-white transition-all duration-700 ease-out dark:border-stone-700/50 dark:bg-stone-900 ${
                  isHovered
                    ? '-translate-y-2 scale-[1.02] border-amber-300/30 shadow-2xl dark:border-amber-600/30'
                    : 'shadow-lg hover:shadow-xl'
                } `}
              >
                {/* 宋代装饰边框 */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-50/50 via-transparent to-orange-50/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-amber-900/20 dark:via-transparent dark:to-orange-900/20"></div>

                {/* 装饰性角落元素 */}
                <div className="absolute top-4 right-4 h-8 w-8 rounded-tr-lg border-t-2 border-r-2 border-amber-400/30 opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
                <div className="absolute bottom-4 left-4 h-8 w-8 rounded-bl-lg border-b-2 border-l-2 border-orange-400/30 opacity-0 transition-all duration-500 group-hover:opacity-100"></div>

                <div className="relative p-8">
                  {/* 日期区域 - 宋代印章风格 */}
                  <div className="mb-6">
                    <div className="inline-flex items-center space-x-3">
                      <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                      <time
                        dateTime={date}
                        className="text-sm font-medium tracking-wide text-stone-500 dark:text-stone-400"
                      >
                        {formatDate(date, siteMetadata.locale)}
                      </time>
                      <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                    </div>
                  </div>

                  {/* 标题区域 */}
                  <div className="mb-6">
                    <h2 className="text-2xl leading-tight font-light tracking-wide text-stone-800 transition-colors duration-300 group-hover:text-amber-700 md:text-3xl dark:text-stone-200 dark:group-hover:text-amber-300">
                      <Link href={`/blog/${slug}`} className="hover:no-underline">
                        {title}
                      </Link>
                    </h2>
                  </div>

                  {/* 标签区域 - 宋代印章排列 */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-stone-200/50 bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600 transition-all duration-300 hover:border-amber-300/50 hover:bg-amber-50 dark:border-stone-700/50 dark:bg-stone-800 dark:text-stone-400 dark:hover:border-amber-600/50 dark:hover:bg-amber-900/30"
                        >
                          {tag}
                        </span>
                      ))}
                      {tags.length > 3 && (
                        <span className="rounded-full border border-stone-200/50 bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600 dark:border-stone-700/50 dark:bg-stone-800 dark:text-stone-400">
                          +{tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 摘要区域 */}
                  <div className="mb-6">
                    <p className="text-base leading-relaxed text-stone-600 dark:text-stone-400">
                      {summary}
                    </p>
                  </div>

                  {/* 阅读更多按钮 - 宋代书法风格 */}
                  <div className="flex items-center justify-between border-t border-stone-200/50 pt-4 dark:border-stone-700/50">
                    <Link
                      href={`/blog/${slug}`}
                      className="group inline-flex items-center text-sm font-medium text-amber-600 transition-colors duration-300 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
                      aria-label={`Read more: "${title}"`}
                    >
                      <span className="mr-2">阅读全文</span>
                      <svg
                        className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>

                    {/* 装饰性元素 */}
                    <div className="flex items-center space-x-2">
                      <div className="h-1 w-1 rounded-full bg-amber-400"></div>
                      <div className="h-1 w-1 rounded-full bg-orange-400"></div>
                      <div className="h-1 w-1 rounded-full bg-amber-400"></div>
                    </div>
                  </div>
                </div>

                {/* 悬停时的光效 */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/5 to-orange-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </div>
            </article>
          )
        })}
      </div>

      {/* 查看所有文章链接 - 宋代卷轴风格 */}
      {posts.length > MAX_DISPLAY && (
        <div className="mb-16 text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-200/30 to-orange-200/30 blur-xl"></div>
            <Link
              href="/blog"
              className="relative inline-flex transform items-center rounded-full border border-amber-200/50 bg-gradient-to-r from-amber-50 to-orange-50 px-8 py-4 font-medium text-stone-700 shadow-lg transition-all duration-300 hover:scale-105 hover:from-amber-100 hover:to-orange-100 hover:shadow-xl dark:border-amber-700/50 dark:from-stone-800 dark:to-amber-900/30 dark:text-stone-300 dark:hover:from-stone-700 dark:hover:to-amber-800/30"
              aria-label="All posts"
            >
              <span className="mr-3">浏览所有文章</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      )}

      {/* 订阅表单 - 宋代屏风风格 */}
      {siteMetadata.newsletter?.provider && (
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-100/20 via-stone-100/10 to-orange-100/20 blur-2xl dark:from-amber-900/20 dark:via-stone-900/10 dark:to-orange-900/20"></div>
          <div className="relative rounded-3xl border border-amber-200/30 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-amber-700/30 dark:bg-stone-900/80">
            <div className="mb-6 text-center">
              <h3 className="mb-2 text-2xl font-light text-stone-800 dark:text-stone-200">
                订阅更新
              </h3>
              <div className="mx-auto h-0.5 w-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></div>
            </div>
            <NewsletterForm />
          </div>
        </div>
      )}
    </>
  )
}
