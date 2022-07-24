/**
 * Finds correct height of item content
 * @param {HTMLElement} listItem the list item that is opened and closed
 */
const getContentHeight = listItem => {
  const contentWrapper = listItem.querySelector('.content__wrapper')

  if (listItem.classList.contains('item-is-open')) return 0
  return contentWrapper.getBoundingClientRect().height
}

/**
 * Updates the list item
 * @param {HTMLElement} listItem list item being opened and closed
 * @param {Number} height value of height to update, needs to be in px
 */
const updateItem = (listItem, height) => {
  const itemContent = listItem.querySelector('.faq__item__content')

  listItem.classList.toggle('item-is-open')
  itemContent.style.height = `${height}px`
}

const faqList = document.querySelector('.faq-list')

faqList.addEventListener('click', e => {
  const itemHeader = e.target.closest('.faq__item__heading')
  if (!itemHeader) return

  const listItem = itemHeader.parentElement
  const height = getContentHeight(listItem)

  updateItem(listItem, height)
})
