# 状态 state 相关的方法

## createGlobalState

source https://vueuse.org/shared/createGlobalState/

创建全局状态
把状态放入 localStorage 里，这样刷新页面也能恢复。状态全局可以获取。

场景：

可以区分状态，不变的，可变的，可变的比如当前的草稿之类的可以使用它，和 pinia + 持久化插件相比，这个更直观，但不能追溯变化。

## createInjectionState

source https://vueuse.org/shared/createInjectionState/

创建注入状态
创建故意而全局状态，可以注入到组件内部

场景：
类似 pinia，不同组件来读取状态、操作状态。核心用的是 provide/inject

在组件组件里使用 useProvide，在嵌套的子孙组件里读取值和操作值

## createSharedComposable

source https://vueuse.org/shared/createSharedComposable/

在多个 vue 实例中共享状态。

场景：
多实例还没用过。

## useAsyncState

source https://vueuse.org/core/useAsyncState/

使用异步状态
响应式异步状态。不会阻塞 setup，可用了才创建

场景：
不知道有啥用

## useDebouncedRefHistory

souce https://vueuse.org/core/useDebouncedRefHistory/

操作历史暂存

场景：
用户编辑器、操作多个步骤，可以撤销、恢复

## useLastChanged

source https://vueuse.org/shared/useLastChanged/

记录上次操作之后的时间戳 :just now

场景：
记录某个 ref 多久没操作了，比如停止操作几分钟就保存、停止之类的

## useLocalStorage

source https://vueuse.org/core/useLocalStorage/

响应式的 localStorage，和 `useStorage` 类似。

场景：
刷新自动恢复

## useManualRefHistory

和上面的 `useRefHistory`一样，只不过是手动触发保存的

类似的还有 `useRefHistory`  `useDebounceRefHistory` `useManualRefHistory` `useThrottledRefHistory` 只不过自动手动、节流防抖