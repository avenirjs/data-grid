import{j as l}from"./jsx-runtime-05085448.js";import{d as b,e as m,A as p}from"./index-abe37881.js";import"./index-0100a516.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-a6e2f9c6.js";import"../sb-preview/runtime.mjs";const L={title:"example/Table",component:b,tags:["autodocs"],parameters:{layout:"padded"}},t={render:({data:n})=>l.jsx(b,{children:n.map(({heading:e,cells:a},r,i)=>l.jsx(m,{heading:e,children:a.map(({label:s})=>l.jsx(p,{line:i.length-1!==r,children:s}))}))}),args:{data:[{heading:!0,cells:[{label:"Operator"},{label:"Headset Display"},{label:"3G Availability"}]},{cells:[{label:"*Celcom Axiata (LTE)"},{label:"CELCOM / My Celcom / 502 19"},{label:"Yes"}]},{cells:[{label:"*DiGi Telecom (LTE)"},{label:"DiGi 1800 / DiGi / MYMY18"},{label:"Yes"}]},{cells:[{label:"*Maxis (LTE)"},{label:"U Mobile / MYS 18 / MY 18"},{label:"Yes"}]},{cells:[{label:"U Mobile (LTE)"},{label:"U Mobile / MYS 18 / MY 18"},{label:"Yes"}]}]}},d={render:({data:n})=>l.jsx(b,{children:n.map(({heading:e,cells:a},r,i)=>l.jsx(m,{heading:e,children:a.map(({label:s})=>l.jsx(p,{line:i.length-1!==r,sortable:!!e,children:s}))}))}),args:{...t.args}},o={render:({data:n})=>l.jsx(b,{mode:"single-select",children:n.map(({heading:e,cells:a},r,i)=>l.jsx(m,{heading:e,children:a.map(({label:s})=>l.jsx(p,{line:i.length-1!==r,children:s}))}))}),args:{data:[{heading:!0,cells:[{label:"Name"},{label:"Mobile"},{label:"Expiry"},{label:"Penalty"}]},{cells:[{label:"Mavis Chen"},{label:"8899 7654"},{label:"Dec 2022"},{label:"$600"}]},{cells:[{label:"Rodney Artichoke"},{label:"9988 7676"},{label:"Dec 2022"},{label:"$300"}]},{cells:[{label:"Valentino Morose"},{label:"8900 7654"},{label:"Dec 2022"},{label:"$300"}]},{cells:[{label:"Eric Widget"},{label:"8900 7654"},{label:"Dec 2022"},{label:"$300"}]}]}},c={render:({data:n})=>l.jsx(b,{mode:"multi-select",children:n.map(({heading:e,cells:a},r,i)=>l.jsx(m,{heading:e,children:a.map(({label:s})=>l.jsx(p,{line:i.length-1!==r,children:s}))}))}),args:{data:[{heading:!0,cells:[{label:"BRN"},{label:"Company Name"}]},{cells:[{label:"198702333K"},{label:"Blue Ocean International"}]},{cells:[{label:"198900364N"},{label:"Red Electronics"}]},{cells:[{label:"196700335H"},{label:"Yellow Gaming"}]},{cells:[{label:"196800306E"},{label:"Purple Automobiles"}]},{cells:[{label:"199131124V"},{label:"Diamond Interiors Holdings"}]},{cells:[{label:"200201664D"},{label:"Omnichannel Solutions International"}]}]}};var h,g,D;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: ({
    data
  }: any) => <AvnDataGrid>
      {data.map(({
      heading,
      cells
    }: any, index: number, arr: any) => <AvnDataGridRow heading={heading}>
          {cells.map(({
        label
      }: any) => <AvnDataGridCell line={arr.length - 1 !== index}>
              {label}
            </AvnDataGridCell>)}
        </AvnDataGridRow>)}
    </AvnDataGrid>,
  args: {
    data: [{
      heading: true,
      cells: [{
        label: 'Operator'
      }, {
        label: 'Headset Display'
      }, {
        label: '3G Availability'
      }]
    }, {
      cells: [{
        label: '*Celcom Axiata (LTE)'
      }, {
        label: 'CELCOM / My Celcom / 502 19'
      }, {
        label: 'Yes'
      }]
    }, {
      cells: [{
        label: '*DiGi Telecom (LTE)'
      }, {
        label: 'DiGi 1800 / DiGi / MYMY18'
      }, {
        label: 'Yes'
      }]
    }, {
      cells: [{
        label: '*Maxis (LTE)'
      }, {
        label: 'U Mobile / MYS 18 / MY 18'
      }, {
        label: 'Yes'
      }]
    }, {
      cells: [{
        label: 'U Mobile (LTE)'
      }, {
        label: 'U Mobile / MYS 18 / MY 18'
      }, {
        label: 'Yes'
      }]
    }]
  }
}`,...(D=(g=t.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var G,u,A;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: ({
    data
  }: any) => <AvnDataGrid>
      {data.map(({
      heading,
      cells
    }: any, index: number, arr: any) => <AvnDataGridRow heading={heading}>
          {cells.map(({
        label
      }: any) => <AvnDataGridCell line={arr.length - 1 !== index} sortable={!!heading}>
              {label}
            </AvnDataGridCell>)}
        </AvnDataGridRow>)}
    </AvnDataGrid>,
  args: {
    ...Table.args
  }
}`,...(A=(u=d.parameters)==null?void 0:u.docs)==null?void 0:A.source}}};var x,v,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: ({
    data
  }: any) => <AvnDataGrid mode='single-select'>
      {data.map(({
      heading,
      cells
    }: any, index: number, arr: any) => <AvnDataGridRow heading={heading}>
          {cells.map(({
        label
      }: any) => <AvnDataGridCell line={arr.length - 1 !== index}>
              {label}
            </AvnDataGridCell>)}
        </AvnDataGridRow>)}
    </AvnDataGrid>,
  args: {
    data: [{
      heading: true,
      cells: [{
        label: 'Name'
      }, {
        label: 'Mobile'
      }, {
        label: 'Expiry'
      }, {
        label: 'Penalty'
      }]
    }, {
      cells: [{
        label: 'Mavis Chen'
      }, {
        label: '8899 7654'
      }, {
        label: 'Dec 2022'
      }, {
        label: '$600'
      }]
    }, {
      cells: [{
        label: 'Rodney Artichoke'
      }, {
        label: '9988 7676'
      }, {
        label: 'Dec 2022'
      }, {
        label: '$300'
      }]
    }, {
      cells: [{
        label: 'Valentino Morose'
      }, {
        label: '8900 7654'
      }, {
        label: 'Dec 2022'
      }, {
        label: '$300'
      }]
    }, {
      cells: [{
        label: 'Eric Widget'
      }, {
        label: '8900 7654'
      }, {
        label: 'Dec 2022'
      }, {
        label: '$300'
      }]
    }]
  }
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var M,C,Y;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: ({
    data
  }: any) => <AvnDataGrid mode='multi-select'>
      {data.map(({
      heading,
      cells
    }: any, index: number, arr: any) => <AvnDataGridRow heading={heading}>
          {cells.map(({
        label
      }: any) => <AvnDataGridCell line={arr.length - 1 !== index}>
              {label}
            </AvnDataGridCell>)}
        </AvnDataGridRow>)}
    </AvnDataGrid>,
  args: {
    data: [{
      heading: true,
      cells: [{
        label: 'BRN'
      }, {
        label: 'Company Name'
      }]
    }, {
      cells: [{
        label: '198702333K'
      }, {
        label: 'Blue Ocean International'
      }]
    }, {
      cells: [{
        label: '198900364N'
      }, {
        label: 'Red Electronics'
      }]
    }, {
      cells: [{
        label: '196700335H'
      }, {
        label: 'Yellow Gaming'
      }]
    }, {
      cells: [{
        label: '196800306E'
      }, {
        label: 'Purple Automobiles'
      }]
    }, {
      cells: [{
        label: '199131124V'
      }, {
        label: 'Diamond Interiors Holdings'
      }]
    }, {
      cells: [{
        label: '200201664D'
      }, {
        label: 'Omnichannel Solutions International'
      }]
    }]
  }
}`,...(Y=(C=c.parameters)==null?void 0:C.docs)==null?void 0:Y.source}}};const O=["Table","TableWithSorting","TableWithRadio","TableWithCheckbox"];export{t as Table,c as TableWithCheckbox,o as TableWithRadio,d as TableWithSorting,O as __namedExportsOrder,L as default};
//# sourceMappingURL=Table.stories-3c1670de.js.map
