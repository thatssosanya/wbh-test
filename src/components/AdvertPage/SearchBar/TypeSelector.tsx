import Flex from "@/components/ui/Flex"
import Icon from "@/components/ui/Icon"
import Stack from "@/components/ui/Stack"
import Text from "@/components/ui/Text"

const TypeSelector = ({ className }: { className?: string }) => (
  <Flex
    justifyContent="space-between"
    alignItems="center"
    borderRadius="4"
    paddingX="10"
    paddingY="8"
    backgroundColor="box.disabledBackground"
    className={className}
  >
    <Stack gap="4">
      <Text size="small" color="placeholder">
        Тип
      </Text>
      <Text>Поиск</Text>
    </Stack>
    <Text color="placeholder">
      <Icon type="chevronDown" />
    </Text>
  </Flex>
)

export default TypeSelector
