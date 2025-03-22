const data = [
    {
      name: "Item 1",
      children: [
        {
          name: "Subitem 1.1",
          children: [
            { name: "Subsubitem 1.1.1", children: ["children1.1","children2.1","children3.1"] },
            { name: "Subsubitem 1.1.2", children: ["children4.1","children5.1","children6.1"] },
          ],
        },
        { name: "Subitem 1.2", children: ["children7.1","children8.1","children9.1"] },
      ],
    },
    {
      name: "Item 2",
      children: [
        { name: "Subitem 2.1", children: ["children2.1","children2.2","children2.3"] },
        { name: "Subitem 2.2", children: ["children2.2.1","children2.2.2","children2.2.3"] },
      ],
    },
  ];
