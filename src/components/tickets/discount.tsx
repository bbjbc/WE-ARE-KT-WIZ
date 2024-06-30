import Table from '../ui/table/table';
import IntroductionItem from '../content/introduction-item';
import { SpecialDiscounts } from '../../mocks/discount-table-items';
import { CardDiscounts } from '../../mocks/discount-table-items';

const Discount = () => {
  return (
    <>
      <IntroductionItem title="카드 할인">
        <Table
          data={CardDiscounts}
          tHeadFirstTitle="카드"
          tHeadSecondTitle="할인 내용"
        />
      </IntroductionItem>

      <IntroductionItem title="우대 할인">
        <Table
          data={SpecialDiscounts}
          tHeadFirstTitle="우대 대상"
          tHeadSecondTitle="할인 내용"
          caption="할인 및 우대된 가격으로 kt wiz 경기장에서 직접 만나 보세요!"
        />
      </IntroductionItem>
    </>
  );
};

export default Discount;
