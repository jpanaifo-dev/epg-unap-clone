export interface ISidebarItem {
  key: string | '' | undefined
  optionName: string
  href?: string
  sectionTitle?: string
  sectionContent?: React.ReactNode
}
