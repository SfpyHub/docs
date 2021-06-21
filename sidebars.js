module.exports = {
  docs: [
    'introduction'
  ],
  'protocol': [
    '01-protocol/01-how-sfpy-works',
    '01-protocol/02-network-participants',
    '01-protocol/03-smart-contracts'
  ],
  'core': [
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        '02-core/01-payments',
        '02-core/02-pools',
        '02-core/03-refunds',
        '02-core/04-flash-loans',
        '02-core/05-flash-apps',
      ],
    },
    {
      type: 'category',
      label: 'Smart Contracts',
      items: [
        '03-smart-contracts/01-quick-start',
        '03-smart-contracts/02-paying-from-a-smart-contract',
        '03-smart-contracts/03-withdrawing-from-a-smart-contract',
        '03-smart-contracts/04-refunding-from-a-smart-contract',
        '03-smart-contracts/05-using-flash-loans',
        '03-smart-contracts/06-using-flash-apps'
      ],
    }
  ],
  'interface': [
    '04-interface/01-create-account',
    '04-interface/02-create-request',
    '04-interface/03-making-a-payment',
    '04-interface/04-refunding-a-payment',
    '04-interface/05-withdraw-balance',
  ],
  'api': [
    '05-api/01-introduction'
  ],
  'references': [
    '06-references/01-deployment-addresses',
    {
      type: 'category',
      label: 'Core',
      items: [
        '06-references/01-core/01-factory',
        '06-references/01-core/02-pool',
        '06-references/01-core/03-pool-erc-20',
        '06-references/01-core/04-borrower'
      ],
    },
    {
      type: 'category',
      label: 'Periphery',
      items: [
        '06-references/02-periphery/01-router',
        '06-references/02-periphery/02-callback',
        '06-references/02-periphery/03-library'
      ],
    }
  ],
  'faq': [
    'faq/index'
  ]
};