"use client";

import { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Check, SlidersHorizontal } from "lucide-react";
import { moneyballStocksMock } from "./mocks/moneyball";
import { Comments } from "./comments";
import { CustomTooltip } from "@/components/ui/custom-tooltip";
import { MoneyballSearchBar } from "./moneyball-searchbar";
import { Podcast } from "./podcast";
import { CustomizePanel } from "./customize-panel";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { TickerAvatar } from "@/components/ui/ticker-avatar";

export function MoneyballTable() {
  const [isCustomizePanelOpen, setIsCustomizePanelOpen] = useState(false);
  const [deviationsCount, setDeviationsCount] = useState(0);

  const formatPercent = (num: number) => {
    return `${num}%`;
  };

  const handleDeviationsChange = (count: number) => {
    setDeviationsCount(count);
  };

  return (
    <div className="relative flex w-full h-full overflow-hidden">
      <div className={cn(
        "flex-grow flex flex-col h-full transition-all duration-300 ease-in-out",
        isCustomizePanelOpen ? "w-[calc(100%-340px)]" : "w-full"
      )}>
        <div className="flex justify-between items-center py-1.5 px-2 border-b border-gray-200">
          <div className="text-sm text-gray-500 font-medium">
            Results: 3625 of 3625
          </div>
          <div className="flex items-center gap-2">
            <MoneyballSearchBar className="w-80 lg:w-[320px] xl:w-[400px]" />
            <Select defaultValue="2025-q1">
              <SelectTrigger className="w-[130px] h-8 text-sm font-medium border-gray-200 shadow-none hidden md:flex" size="sm">
                <SelectValue placeholder="Select Quarter">2025 Q1</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025-q1">2025 Q1</SelectItem>
                <SelectItem value="2024-q4">2024 Q4</SelectItem>
                <SelectItem value="2024-q3">2024 Q3</SelectItem>
                <SelectItem value="2024-q2">2024 Q2</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="relative flex items-center gap-1 shadow-none"
              onClick={() => setIsCustomizePanelOpen(true)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span className="hidden lg:inline">Customize</span>
              {deviationsCount > 0 && (
                <span className="absolute -top-1.5 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-700 text-xs font-medium text-white">
                  {deviationsCount}
                </span>
              )}
            </Button>
          </div>
        </div>

        <div className="flex-grow overflow-x-auto overflow-y-auto bg-white">
          <Table className="compact-table min-w-[1600px] border-collapse [&_th]:py-2.5 [&_td]:py-2.5 [&_th]:px-4 [&_td]:px-4 relative">
            <TableCaption></TableCaption>
            <TableHeader className="bg-gray-100 sticky top-0 z-10 h-7">
              <TableRow className="border-b h-7">
                <TableHead
                  className="sticky left-0 z-30 bg-gray-100 border-r border-gray-200"
                  style={{ minWidth: "30px", width: "30px" }}
                >
                  {/* Puedes poner un checkbox para seleccionar todos, o dejar vacío */}
                </TableHead>
                <TableHead
                  className="sticky left-[30px] z-20 bg-gray-100 border-r border-gray-200"
                  style={{ minWidth: "110px", width: "110px" }}
                >
                  Symbol
                </TableHead>
                <TableHead
                  className="min-w-[144px] text-left border-r border-gray-200 bg-gray-100"
                  style={{ width: "144px" }}
                >
                  Name
                </TableHead>
                <TableHead className="w-[60px] text-center cursor-help group relative">
                  <CustomTooltip variant="info" content={<div className="text-xs p-1"><p>Curated episodes offering expert analysis per stock.</p></div>}>
                    <span className="group-hover:bg-gray-200 p-1 rounded transition-colors cursor-pointer">Podcast</span>
                  </CustomTooltip>
                  <div className="border-r h-full absolute right-0 top-0"></div>
                </TableHead>
                <TableHead className="w-[90px] text-left group relative">
                  <CustomTooltip variant="discovery" autoShow={true} showDelay={1000} content={<div className="text-xs p-1">Click on comment icons to see what <br />other investors are saying about these stocks.</div>}>
                    <span className="group-hover:bg-gray-200 p-1 rounded transition-colors cursor-pointer">Comments</span>
                  </CustomTooltip>
                  <div className="border-r h-full absolute right-0 top-0"></div>
                </TableHead>
                <TableHead className="text-center group relative">
                  <CustomTooltip variant="info" content={<div className="text-xs p-1"><p>Combines financials, tech, product, leadership, and valuation into a single strength score.</p><p className="mt-1 text-gray-400">Updated on 03/31/2025</p></div>}>
                    <span className="group-hover:bg-gray-200 p-1 rounded transition-colors cursor-pointer">Superscore</span>
                  </CustomTooltip>
                  <div className="border-r h-full absolute right-0 top-0"></div>
                </TableHead>
                <TableHead className="text-center group relative">
                  <CustomTooltip variant="info" content={<div className="text-xs p-1"><p>Measures how well a company uses physical assets to generate cash, excluding debt.</p><p className="mt-1 text-gray-400">Updated on 03/31/2025</p></div>}>
                    <span className="group-hover:bg-gray-200 p-1 rounded transition-colors cursor-pointer">ROUNTA</span>
                  </CustomTooltip>
                  <div className="border-r h-full absolute right-0 top-0"></div>
                </TableHead>
                <TableHead className="text-center group relative">
                  <CustomTooltip variant="info" content={<div className="text-xs p-1"><p>Evaluates core tech, AI, and innovation strength within the industry.</p><p className="mt-1 text-gray-400">Updated on 03/31/2025</p></div>}>
                    <span className="group-hover:bg-gray-200 p-1 rounded transition-colors cursor-pointer">Tech</span>
                  </CustomTooltip>
                  <div className="border-r h-full absolute right-0 top-0"></div>
                </TableHead>
                <TableHead className="text-center group relative">
                  <CustomTooltip variant="info" content={<div className="text-xs p-1"><p>Analyzes product launches, partnerships, and sentiment over the past year.</p><p className="mt-1 text-gray-400">Updated on 03/31/2025</p></div>}>
                    <span className="group-hover:bg-gray-200 p-1 rounded transition-colors cursor-pointer">Product: 1Y</span>
                  </CustomTooltip>
                  <div className="border-r h-full absolute right-0 top-0"></div>
                </TableHead>
                <TableHead className="text-center group relative">
                  <CustomTooltip variant="info" content={<div className="text-xs p-1"><p>Financial strength and stability metrics.</p><p className="mt-1 text-gray-400">Updated on 03/31/2025</p></div>}>
                    <span className="group-hover:bg-gray-200 p-1 rounded transition-colors cursor-pointer">Financial</span>
                  </CustomTooltip>
                  <div className="border-r h-full absolute right-0 top-0"></div>
                </TableHead>
                <TableHead className="text-center group relative">
                  <CustomTooltip variant="info" content={<div className="text-xs p-1"><p>Evaluates long-term product strength based on quality, innovation, and competitiveness.</p><p className="mt-1 text-gray-400">Updated on 03/31/2025</p></div>}>
                    <span className="group-hover:bg-gray-200 p-1 rounded transition-colors cursor-pointer">Product: 5Y</span>
                  </CustomTooltip>
                  <div className="border-r h-full absolute right-0 top-0"></div>
                </TableHead>
                <TableHead className="text-center group relative">
                  <CustomTooltip variant="info" content={<div className="text-xs p-1"><p>Measures leadership through performance, returns, and decision-making.</p><p className="mt-1 text-gray-400">Updated on 03/31/2025</p></div>}>
                    <span className="group-hover:bg-gray-200 p-1 rounded transition-colors cursor-pointer">Leaders</span>
                  </CustomTooltip>
                  <div className="border-r h-full absolute right-0 top-0"></div>
                </TableHead>
                <TableHead className="text-center group relative">
                  <CustomTooltip variant="info" content={<div className="text-xs p-1"><p>Analyzes recent price trends to reflect market momentum.</p><p className="mt-1 text-gray-400">Updated on 03/31/2025</p></div>}>
                    <span className="group-hover:bg-gray-200 p-1 rounded transition-colors cursor-pointer">Surge</span>
                  </CustomTooltip>
                  <div className="border-r h-full absolute right-0 top-0"></div>
                </TableHead>
                <TableHead className="text-center group relative">
                  <CustomTooltip variant="info" content={<div className="text-xs p-1"><p>Assesses growth at a fair price—higher means better value.</p><p className="mt-1 text-gray-400">Updated on 03/31/2025</p></div>}>
                    <span className="group-hover:bg-gray-200 p-1 rounded transition-colors cursor-pointer">GARP</span>
                  </CustomTooltip>
                  <div className="border-r h-full absolute right-0 top-0"></div>
                </TableHead>
                <TableHead className="text-center group relative">
                  <CustomTooltip variant="info" content={<div className="text-xs p-1"><p>Rates AI quality, impact, and infrastructure strength.</p><p className="mt-1 text-gray-400">Updated on 03/31/2025</p></div>}>
                    <span className="group-hover:bg-gray-200 p-1 rounded transition-colors cursor-pointer">AI</span>
                  </CustomTooltip>
                  <div className="border-r h-full absolute right-0 top-0"></div>
                </TableHead>
                <TableHead className="text-center cursor-help group relative">
                  <span className="group-hover:bg-gray-200 p-1 rounded transition-colors cursor-pointer">Price</span>
                  <div className="border-r h-full absolute right-0 top-0"></div>
                </TableHead>
                <TableHead className="text-center cursor-help group relative">
                  <span className="group-hover:bg-gray-200 p-1 rounded transition-colors cursor-pointer">PayScore</span>
                  <div className="border-r h-full absolute right-0 top-0"></div>
                </TableHead>
                <TableHead className="text-center cursor-help group relative">
                  <span className="group-hover:bg-gray-200 p-1 rounded transition-colors cursor-pointer">Industry</span>
                  <div className="border-r h-full absolute right-0 top-0"></div>
                </TableHead>
                <TableHead className="text-center cursor-help group relative">
                  <span className="group-hover:bg-gray-200 p-1 rounded transition-colors cursor-pointer">Market Cap</span>
                  <div className="border-r h-full absolute right-0 top-0"></div>
                </TableHead>
                <TableHead className="text-center cursor-help group relative">
                  <span className="group-hover:bg-gray-200 p-1 rounded transition-colors cursor-pointer">Quant: 5Y</span>
                  <div className="border-r h-full absolute right-0 top-0"></div>
                </TableHead>
                <TableHead className="text-center cursor-help group relative">
                  <span className="group-hover:bg-gray-200 p-1 rounded transition-colors cursor-pointer">Investing Type</span>
                  <div className="border-r h-full absolute right-0 top-0"></div>
                </TableHead>
                <TableHead className="text-center cursor-help group relative">
                  <span className="group-hover:bg-gray-200 p-1 rounded transition-colors cursor-pointer">Div. Yield</span>
                  <div className="border-r h-full absolute right-0 top-0"></div>
                </TableHead>
                <TableHead className="text-center cursor-help group relative">
                  <span className="group-hover:bg-gray-200 p-1 rounded transition-colors cursor-pointer">GAPTA</span>
                  <div className="border-r h-full absolute right-0 top-0"></div>
                </TableHead>
                <TableHead className="text-center group relative">
                  <span className="group-hover:bg-gray-200 p-1 rounded transition-colors cursor-pointer">Follow</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {moneyballStocksMock.map((stock, idx) => (
                <TableRow key={stock.id} className={idx % 2 === 1 ? "bg-gray-50" : "bg-white"}>
                  <TableCell
                    className="sticky left-0 z-30 bg-inherit border-r border-gray-200"
                    style={{ minWidth: "30px", width: "30px" }}
                  >
                    <Checkbox />
                  </TableCell>
                  <TableCell
                    className="sticky left-[30px] z-20 bg-inherit border-r border-gray-200"
                    style={{ minWidth: "110px", width: "110px" }}
                  >
                    <div className="flex items-center gap-2">
                      <TickerAvatar symbol={stock.symbol} logoUrl={stock.logoUrl} size="s" />
                      <span className="text-blue-800 font-medium cursor-pointer hover:text-blue-900 transition-colors select-text">
                        {stock.symbol}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell
                    className="min-w-[144px] text-left"
                    style={{ width: "144px" }}
                  >
                    {stock.name}
                  </TableCell>
                  <TableCell className="w-[60px] text-center">
                    <div className="flex justify-center">
                      <Podcast />
                    </div>
                  </TableCell>
                  <TableCell className="w-[90px] text-left">
                    <div className="flex justify-start">
                      <CustomTooltip 
                        variant="info" 
                        content={
                          <div className="text-xs p-1">
                            {(() => {
                              const S = stock;
                              if (S.commentsCount === 0) return "No comments yet! Be the first";
                              if (S.commentsHasReplies) return `${S.commentsCount} New replies where you participated in.`;
                              if (S.commentsHasNew) return `${S.commentsCount} new comments about ${S.symbol}`;
                              return `${S.commentsCount} comments about ${S.symbol}`;
                            })()}
                          </div>
                        }
                      >
                        <div>
                          <Comments count={stock.commentsCount} hasNew={stock.commentsHasNew} hasReplies={stock.commentsHasReplies} />
                        </div>
                      </CustomTooltip>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{stock.superscore}</TableCell>
                  <TableCell className="text-right">{formatPercent(stock.ROUNTA)}</TableCell>
                  <TableCell className="text-right">{stock.tech}</TableCell>
                  <TableCell className="text-right">{stock.product1Y}</TableCell>
                  <TableCell className="text-right">{stock.financial}</TableCell>
                  <TableCell className="text-right">{stock.product5Y}</TableCell>
                  <TableCell className="text-right">{stock.leaders}</TableCell>
                  <TableCell className="text-right">{stock.surge}</TableCell>
                  <TableCell className="text-right">{stock.garp}</TableCell>
                  <TableCell className="text-right">{stock.ai}</TableCell>
                  <TableCell className="text-right">
                    {(() => {
                      const priceValFromStock = stock.price;

                      if (typeof priceValFromStock === 'number') {
                        const numericPrice: number = priceValFromStock; 
                        if (isNaN(numericPrice)) {
                          return 'N/A';
                        } else {
                          return `$${numericPrice.toFixed(2)}`;
                        }
                      } else if (typeof priceValFromStock === 'string') {
                        return priceValFromStock; 
                      }
                      
                      return 'N/A'; 
                    })()}
                  </TableCell>
                  <TableCell className="text-right">
                    {typeof stock.payScore === 'string' ? stock.payScore : `${stock.payScore}%`}
                  </TableCell>
                  <TableCell className="text-left">{stock.industry}</TableCell>
                  <TableCell className="text-right">{stock.marketCap}</TableCell>
                  <TableCell className="text-right">{stock.quant5Y}</TableCell>
                  <TableCell className="text-left">{stock.investingType}</TableCell>
                  <TableCell className="text-right">{stock.divYield}%</TableCell>
                  <TableCell className="text-right">{stock.gapta}%</TableCell>
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

      <CustomizePanel 
        isOpen={isCustomizePanelOpen} 
        onClose={() => setIsCustomizePanelOpen(false)} 
        onDeviationsChange={handleDeviationsChange}
      />
    </div>
  );
} 