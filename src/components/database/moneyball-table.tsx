"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusCircle, Filter, Play, Pin, Plus, Check } from "lucide-react";
import { moneyballStocksMock } from "./mocks/moneyball";
import { Comments } from "./comments";
import { CustomTooltip } from "@/components/ui/custom-tooltip";

export function MoneyballTable() {
  const formatPercent = (num: number) => {
    return `${num}%`;
  };

  return (
    <div className="space-y-1 p-0">
      <div className="flex justify-end items-center gap-2 pt-3 pb-3">
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <PlusCircle className="h-4 w-4" />
          Add Column
        </Button>
        
        <Select defaultValue="2025-q1">
          <SelectTrigger className="w-[130px]">
            <SelectValue placeholder="Select Quarter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2025-q1">2025 Q1</SelectItem>
            <SelectItem value="2024-q4">2024 Q4</SelectItem>
            <SelectItem value="2024-q3">2024 Q3</SelectItem>
            <SelectItem value="2024-q2">2024 Q2</SelectItem>
          </SelectContent>
        </Select>
        
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="text-sm text-gray-500 overflow-x-auto">
        <Table className="compact-table min-w-[1600px] border-collapse [&_th]:py-1.5 [&_td]:py-1.5 [&_th]:px-2 [&_td]:px-2">
          <TableCaption></TableCaption>
          <TableHeader className="bg-gray-50">
            <TableRow className="border-b">
              <TableHead className="w-10 cursor-help group relative">
                <Pin className="h-3.5 w-3.5" />
                <div className="border-r h-full absolute right-0 top-0"></div>
              </TableHead>
              <TableHead className="w-[90px] cursor-help group relative">
                <span className="group-hover:bg-gray-200 p-1 rounded transition-colors">Symbol</span>
                <div className="border-r h-full absolute right-0 top-0"></div>
              </TableHead>
              <TableHead className="w-[180px] cursor-help group relative">
                <span className="group-hover:bg-gray-200 p-1 rounded transition-colors">Name</span>
                <div className="border-r h-full absolute right-0 top-0"></div>
              </TableHead>
              <TableHead className="w-[60px] text-center cursor-help group relative">
                <span className="group-hover:bg-gray-200 p-1 rounded transition-colors">Podcast</span>
                <div className="border-r h-full absolute right-0 top-0"></div>
              </TableHead>
              <TableHead className="w-[90px] text-center cursor-help group relative">
                <CustomTooltip 
                  variant="discovery" 
                  autoShow={true}
                  showDelay={1000}
                  content={
                    <p className="text-sm">Click on comment icons to see what other investors are saying about these stocks.</p>
                  }
                >
                  <span className="group-hover:bg-gray-200 p-1 rounded transition-colors">Comments</span>
                </CustomTooltip>
                <div className="border-r h-full absolute right-0 top-0"></div>
              </TableHead>
              <TableHead className="text-center cursor-help group relative">
                <CustomTooltip 
                  variant="info" 
                  content="Overall rating that combines multiple factors"
                >
                  <span className="group-hover:bg-gray-200 p-1 rounded transition-colors">Superscore</span>
                </CustomTooltip>
                <div className="border-r h-full absolute right-0 top-0"></div>
              </TableHead>
              <TableHead className="text-center cursor-help group relative">
                <span className="group-hover:bg-gray-200 p-1 rounded transition-colors">ROUNTA</span>
                <div className="border-r h-full absolute right-0 top-0"></div>
              </TableHead>
              <TableHead className="text-center cursor-help group relative">
                <span className="group-hover:bg-gray-200 p-1 rounded transition-colors">Tech</span>
                <div className="border-r h-full absolute right-0 top-0"></div>
              </TableHead>
              <TableHead className="text-center cursor-help group relative">
                <span className="group-hover:bg-gray-200 p-1 rounded transition-colors">Financial</span>
                <div className="border-r h-full absolute right-0 top-0"></div>
              </TableHead>
              <TableHead className="text-center cursor-help group relative">
                <span className="group-hover:bg-gray-200 p-1 rounded transition-colors">Product:1Y</span>
                <div className="border-r h-full absolute right-0 top-0"></div>
              </TableHead>
              <TableHead className="text-center cursor-help group relative">
                <span className="group-hover:bg-gray-200 p-1 rounded transition-colors">Product:5Y</span>
                <div className="border-r h-full absolute right-0 top-0"></div>
              </TableHead>
              <TableHead className="text-center cursor-help group relative">
                <span className="group-hover:bg-gray-200 p-1 rounded transition-colors">Leaders</span>
                <div className="border-r h-full absolute right-0 top-0"></div>
              </TableHead>
              <TableHead className="text-center cursor-help group relative">
                <span className="group-hover:bg-gray-200 p-1 rounded transition-colors">Surge</span>
                <div className="border-r h-full absolute right-0 top-0"></div>
              </TableHead>
              <TableHead className="text-center cursor-help group relative">
                <span className="group-hover:bg-gray-200 p-1 rounded transition-colors">GARP</span>
                <div className="border-r h-full absolute right-0 top-0"></div>
              </TableHead>
              <TableHead className="text-center cursor-help group relative">
                <span className="group-hover:bg-gray-200 p-1 rounded transition-colors">Price</span>
                <div className="border-r h-full absolute right-0 top-0"></div>
              </TableHead>
              <TableHead className="text-center cursor-help group relative">
                <span className="group-hover:bg-gray-200 p-1 rounded transition-colors">AI</span>
                <div className="border-r h-full absolute right-0 top-0"></div>
              </TableHead>
              <TableHead className="text-center cursor-help group relative">
                <span className="group-hover:bg-gray-200 p-1 rounded transition-colors">PayScore</span>
                <div className="border-r h-full absolute right-0 top-0"></div>
              </TableHead>
              <TableHead className="text-center cursor-help group relative">
                <span className="group-hover:bg-gray-200 p-1 rounded transition-colors">Industry</span>
                <div className="border-r h-full absolute right-0 top-0"></div>
              </TableHead>
              <TableHead className="text-center cursor-help group relative">
                <span className="group-hover:bg-gray-200 p-1 rounded transition-colors">Market Cap</span>
                <div className="border-r h-full absolute right-0 top-0"></div>
              </TableHead>
              <TableHead className="text-center cursor-help group relative">
                <span className="group-hover:bg-gray-200 p-1 rounded transition-colors">Quant: 5Y</span>
                <div className="border-r h-full absolute right-0 top-0"></div>
              </TableHead>
              <TableHead className="text-center cursor-help group relative">
                <span className="group-hover:bg-gray-200 p-1 rounded transition-colors">Investing Type</span>
                <div className="border-r h-full absolute right-0 top-0"></div>
              </TableHead>
              <TableHead className="text-center cursor-help group relative">
                <span className="group-hover:bg-gray-200 p-1 rounded transition-colors">Div. Yield</span>
                <div className="border-r h-full absolute right-0 top-0"></div>
              </TableHead>
              <TableHead className="text-center cursor-help group relative">
                <span className="group-hover:bg-gray-200 p-1 rounded transition-colors">GAPTA</span>
                <div className="border-r h-full absolute right-0 top-0"></div>
              </TableHead>
              <TableHead className="text-center cursor-help group relative">
                <span className="group-hover:bg-gray-200 p-1 rounded transition-colors">Follow</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {moneyballStocksMock.map((stock) => (
              <TableRow key={stock.id}>
                <TableCell className="w-10 text-center">
                  <Checkbox />
                </TableCell>
                <TableCell className="w-[90px] font-medium text-gray-600">
                  {stock.symbol}
                </TableCell>
                <TableCell className="w-[180px] text-left">
                  {stock.name}
                </TableCell>
                <TableCell className="w-[60px] text-center">
                  <div className="flex justify-center">
                    <Play className="h-3.5 w-3.5 text-blue-500" />
                  </div>
                </TableCell>
                <TableCell className="w-[90px] text-center">
                  <div className="flex justify-center">
                    <CustomTooltip 
                      variant="info" 
                      content={
                        (() => {
                          if (stock.commentsCount === 0) {
                            return "No comments yet! Be the first";
                          } else if (stock.commentsHasReplies) {
                            return `${stock.commentsCount} New replies where you participated in.`;
                          } else if (stock.commentsHasNew) {
                            return `${stock.commentsCount} new comments about ${stock.symbol}`;
                          } else {
                            return `${stock.commentsCount} comments about ${stock.symbol}`;
                          }
                        })()
                      }
                    >
                      <div>
                        <Comments 
                          count={stock.commentsCount} 
                          hasNew={stock.commentsHasNew} 
                          hasReplies={stock.commentsHasReplies} 
                        />
                      </div>
                    </CustomTooltip>
                  </div>
                </TableCell>
                <TableCell className="text-right">{stock.superscore}</TableCell>
                <TableCell className="text-right">{formatPercent(stock.ROUNTA)}</TableCell>
                <TableCell className="text-right">{stock.tech}</TableCell>
                <TableCell className="text-right">{stock.financial}</TableCell>
                <TableCell className="text-right">{stock.product1Y}</TableCell>
                <TableCell className="text-right">{stock.product5Y}</TableCell>
                <TableCell className="text-right">{stock.leaders}</TableCell>
                <TableCell className="text-right">{stock.surge}</TableCell>
                <TableCell className="text-right">{stock.garp}</TableCell>
                <TableCell className="text-right">{stock.price}</TableCell>
                <TableCell className="text-right">{stock.ai}</TableCell>
                <TableCell className="text-right">{stock.payScore}</TableCell>
                <TableCell className="text-left">{stock.industry}</TableCell>
                <TableCell className="text-right">{stock.marketCap}</TableCell>
                <TableCell className="text-right">{stock.quant5Y}</TableCell>
                <TableCell className="text-left">{stock.investingType}</TableCell>
                <TableCell className="text-right">{stock.divYield}</TableCell>
                <TableCell className="text-right">{stock.gapta}</TableCell>
                <TableCell className="text-center">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-7 w-7 rounded-full text-blue-500 hover:bg-blue-50"
                  >
                    {stock.isFollowing ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
} 