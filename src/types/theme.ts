import theme from "@/utils/theme"

import { AllKeyChains } from "@/types/utils"

export type Color = AllKeyChains<typeof theme.colors>

export type Spacing = keyof typeof theme.spacing

export type FontSize = keyof typeof theme.fontSizes
