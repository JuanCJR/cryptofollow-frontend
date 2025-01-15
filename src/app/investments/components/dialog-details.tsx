import { Badge, Stack, VStack } from "@chakra-ui/react";
import {
  DialogTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "../../../components/ui/dialog";
import { DataListItem, DataListRoot } from "../../../components/ui/data-list";
import { MenuItem } from "../../../components/ui/menu";
import { Tooltip } from "@/components/ui/tooltip";
import { InvestmentIdentity } from "../types/crypto.types";
import { NumericFormat } from "react-number-format";

interface InvestmentDialogDetailProps {
  title: string;
  invest: InvestmentIdentity;
}
export const InvestmentDialogDetail = (props: InvestmentDialogDetailProps) => {
  const { title, invest } = props;

  return (
    <DialogRoot placement={"center"}>
      <VStack alignItems="start">
        <DialogTrigger asChild>
          <MenuItem value="detail">{title}</MenuItem>
        </DialogTrigger>
        <DialogContent p={"30px"}>
          <DialogHeader>
            <DialogTitle pb={5}>
              Inversion en : {invest.currency.name}
            </DialogTitle>
          </DialogHeader>
          <DialogBody pb="8" borderBottom={"solid thin #e4e4e7"}>
            <DataListRoot orientation="horizontal">
              <DataListItem
                label="Ganancias"
                value={
                  invest.percentageVariation > 0 ? (
                    <Tooltip
                      showArrow
                      content={`${invest.percentageVariation}%`}
                    >
                      <Badge colorPalette="green">
                        <NumericFormat
                          displayType="text"
                          value={invest.percentageVariation}
                          thousandSeparator="."
                          decimalSeparator=","
                          decimalScale={2}
                          fixedDecimalScale
                          prefix="+"
                          suffix={` %`}
                        />
                      </Badge>
                    </Tooltip>
                  ) : (
                    <Tooltip
                      showArrow
                      content={`${invest.percentageVariation}%`}
                    >
                      <Badge colorPalette="red">
                        <NumericFormat
                          displayType="text"
                          value={invest.percentageVariation}
                          thousandSeparator="."
                          decimalSeparator=","
                          decimalScale={2}
                          fixedDecimalScale
                          suffix={` %`}
                        />
                      </Badge>
                    </Tooltip>
                  )
                }
              />
              <DataListItem
                borderBottom={"solid thin #e4e4e7"}
                label="Precio (USDT)"
                value={
                  <Stack ml={"auto"}>
                    <NumericFormat
                      displayType="text"
                      value={invest.buyPrice}
                      thousandSeparator="."
                      decimalSeparator=","
                      decimalScale={8}
                      fixedDecimalScale
                      suffix={` $`}
                    />
                  </Stack>
                }
              />
              <DataListItem
                borderBottom={"solid thin #e4e4e7"}
                label="Ganancias (USDT)"
                value={
                  <Stack ml={"auto"}>
                    <NumericFormat
                      displayType="text"
                      value={invest.pairVariation}
                      thousandSeparator="."
                      decimalSeparator=","
                      decimalScale={2}
                      fixedDecimalScale
                      suffix={` $`}
                    />
                  </Stack>
                }
              />
              <DataListItem
                borderBottom={"solid thin #e4e4e7"}
                label="Inversion (USDT)"
                value={
                  <Stack ml={"auto"}>
                    <NumericFormat
                      displayType="text"
                      value={invest.pairInvestment}
                      thousandSeparator="."
                      decimalSeparator=","
                      decimalScale={2}
                      fixedDecimalScale
                      suffix={` $`}
                    />
                  </Stack>
                }
              />
              <DataListItem
                borderBottom={"solid thin #e4e4e7"}
                label="Total (USDT)"
                value={
                  <Stack ml={"auto"}>
                    <NumericFormat
                      displayType="text"
                      value={invest.pairAmount}
                      thousandSeparator="."
                      decimalSeparator=","
                      decimalScale={2}
                      fixedDecimalScale
                      suffix={` $`}
                    />
                  </Stack>
                }
              />
            </DataListRoot>
          </DialogBody>
          <DialogCloseTrigger />
        </DialogContent>
      </VStack>
    </DialogRoot>
  );
};
