<script setup lang="ts">

const invoices = [
  { id: "INV-001", status: "결제 완료", method: "카드", amount: "₩250,000" },
  { id: "INV-002", status: "대기", method: "계좌이체", amount: "₩150,000" },
  { id: "INV-003", status: "결제 완료", method: "카드", amount: "₩350,000" },
];

const source = [
  "<" + 'script setup lang="ts">',
  "import {",
  "  Table,",
  "  TableBody,",
  "  TableCell,",
  "  TableHead,",
  "  TableHeader,",
  "  TableRow,",
  '} from "@whalerice/nuxt-ui/table";',
  "",
  "const invoices = [",
  '  { id: "INV-001", status: "결제 완료", amount: "₩250,000" },',
  "];",
  "<" + "/script>",
  "",
  "<template>",
  "  <Table>",
  "    <TableHeader>",
  "      <TableRow>",
  "        <TableHead>청구서</TableHead>",
  "        <TableHead>상태</TableHead>",
  "        <TableHead class=" + '"text-right">금액</TableHead>',
  "      </TableRow>",
  "    </TableHeader>",
  "    <TableBody>",
  '      <TableRow v-for="row in invoices" :key="row.id">',
  "        <TableCell>{{ row.id }}</TableCell>",
  "        <TableCell>{{ row.status }}</TableCell>",
  '        <TableCell class="text-right">{{ row.amount }}</TableCell>',
  "      </TableRow>",
  "    </TableBody>",
  "  </Table>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>청구서</TableHead>
          <TableHead>상태</TableHead>
          <TableHead>결제 수단</TableHead>
          <TableHead class="text-right">금액</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="row in invoices" :key="row.id">
          <TableCell class="font-medium">{{ row.id }}</TableCell>
          <TableCell>{{ row.status }}</TableCell>
          <TableCell>{{ row.method }}</TableCell>
          <TableCell class="text-right">{{ row.amount }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </PreviewFrame>
</template>
